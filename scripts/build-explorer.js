#!/usr/bin/env node

/**
 * TailorAI Offline Documentation Explorer Generator
 * 
 * Scans .tailorai/ and compiles all markdown documentation into a 
 * standalone, self-contained single-file HTML knowledge explorer.
 * 
 * Works out-of-the-box on any Node.js version (zero dependencies).
 * 
 * Usage:
 *   node scripts/build-explorer.js [targetDir] [outputFile]
 *   Default targetDir: .tailorai
 *   Default outputFile: .tailorai/index.html
 */

const fs = require('fs');
const path = require('path');

const targetDir = process.argv[2] ? path.resolve(process.argv[2]) : path.resolve(__dirname, '../.tailorai');
const outputFile = process.argv[3] ? path.resolve(process.argv[3]) : path.join(targetDir, 'index.html');

if (!fs.existsSync(targetDir)) {
  console.error(`❌ Target directory does not exist: ${targetDir}`);
  process.exit(1);
}

console.log(`🔍 Scanning markdown files in: ${targetDir}`);

const docsData = {};
const ignoreList = ['node_modules', '.git', 'index.html'];

function scanDir(dir, relativeRoot = '') {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const tree = [];

  for (const entry of entries) {
    if (ignoreList.includes(entry.name) || entry.name.startsWith('.')) continue;

    const fullPath = path.join(dir, entry.name);
    const relPath = relativeRoot ? `${relativeRoot}/${entry.name}` : entry.name;

    if (entry.isDirectory()) {
      const children = scanDir(fullPath, relPath);
      if (children.length > 0) {
        tree.push({
          name: entry.name,
          type: 'directory',
          path: relPath,
          children
        });
      }
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      docsData[relPath] = content;
      tree.push({
        name: entry.name,
        type: 'file',
        path: relPath,
        size: content.length
      });
    }
  }

  tree.sort((a, b) => {
    if (a.type !== b.type) return a.type === 'directory' ? -1 : 1;
    return a.name.localeCompare(b.name);
  });

  return tree;
}

const fileTree = scanDir(targetDir);
const docCount = Object.keys(docsData).length;
console.log(`📦 Found ${docCount} markdown documents.`);

const htmlTemplate = `<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TailorAI — Offline Knowledge Explorer</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  
  <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark-dimmed.min.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>

  <style>
    :root {
      --bg-body: #0b1120;
      --bg-sidebar: #0f172a;
      --bg-card: #1e293b;
      --bg-hover: #334155;
      --border: #1e293b;
      --text-main: #f8fafc;
      --text-muted: #94a3b8;
      --primary: #3b82f6;
      --primary-hover: #2563eb;
      --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
      --font-mono: 'JetBrains Mono', monospace;
    }
    html.light {
      --bg-body: #f8fafc;
      --bg-sidebar: #ffffff;
      --bg-card: #f1f5f9;
      --bg-hover: #e2e8f0;
      --border: #e2e8f0;
      --text-main: #0f172a;
      --text-muted: #64748b;
      --primary: #2563eb;
      --primary-hover: #1d4ed8;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: var(--font-sans); background: var(--bg-body); color: var(--text-main); display: flex; height: 100vh; overflow: hidden; }
    
    #sidebar { width: 320px; background: var(--bg-sidebar); border-right: 1px solid var(--border); display: flex; flex-direction: column; flex-shrink: 0; }
    .sidebar-header { padding: 18px 20px; border-bottom: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; }
    .brand { font-size: 16px; font-weight: 700; display: flex; align-items: center; gap: 8px; }
    .theme-toggle { background: transparent; border: 1px solid var(--border); color: var(--text-main); padding: 4px 8px; border-radius: 6px; cursor: pointer; }
    
    .search-box { padding: 12px 16px; border-bottom: 1px solid var(--border); }
    .search-input { width: 100%; background: var(--bg-body); border: 1px solid var(--border); border-radius: 6px; color: var(--text-main); padding: 8px 12px; font-size: 13px; font-family: var(--font-sans); outline: none; }
    .search-input:focus { border-color: var(--primary); }

    .tree-container { flex: 1; overflow-y: auto; padding: 12px 8px; }
    .tree-node { margin: 2px 0; }
    .tree-dir-title { font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted); padding: 8px 12px; border-radius: 4px; display: flex; align-items: center; gap: 6px; cursor: pointer; }
    .tree-dir-title:hover { background: var(--bg-hover); color: var(--text-main); }
    .tree-file { font-size: 13px; padding: 6px 12px 6px 28px; border-radius: 4px; cursor: pointer; color: var(--text-muted); display: flex; align-items: center; gap: 6px; text-decoration: none; }
    .tree-file:hover { background: var(--bg-hover); color: var(--text-main); }
    .tree-file.active { background: var(--primary); color: #ffffff; font-weight: 500; }

    #main { flex: 1; display: flex; flex-direction: column; overflow: hidden; background: var(--bg-body); }
    .top-bar { padding: 14px 28px; border-bottom: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; font-size: 13px; font-family: var(--font-mono); color: var(--text-muted); }
    .doc-viewer { flex: 1; overflow-y: auto; padding: 40px 48px; }
    .markdown-body { max-width: 920px; margin: 0 auto; line-height: 1.7; font-size: 15px; }
    .markdown-body h1, .markdown-body h2, .markdown-body h3 { margin-top: 1.5em; margin-bottom: 0.6em; color: var(--text-main); }
    .markdown-body h1 { font-size: 28px; border-bottom: 1px solid var(--border); padding-bottom: 10px; }
    .markdown-body h2 { font-size: 22px; border-bottom: 1px solid var(--border); padding-bottom: 6px; }
    .markdown-body p, .markdown-body ul, .markdown-body ol { margin-bottom: 1.2em; }
    .markdown-body code { font-family: var(--font-mono); font-size: 0.9em; background: var(--bg-card); padding: 2px 6px; border-radius: 4px; }
    .markdown-body pre code { display: block; padding: 16px; overflow-x: auto; background: #0f172a; border-radius: 8px; }
    .markdown-body table { width: 100%; border-collapse: collapse; margin-bottom: 1.5em; }
    .markdown-body th, .markdown-body td { border: 1px solid var(--border); padding: 8px 12px; text-align: left; }
    .markdown-body th { background: var(--bg-card); }
    .markdown-body blockquote { border-left: 4px solid var(--primary); padding-left: 16px; color: var(--text-muted); margin-bottom: 1.2em; }
  </style>
</head>
<body>
  <aside id="sidebar">
    <div class="sidebar-header">
      <div class="brand">🏛️ TailorAI Explorer</div>
      <button class="theme-toggle" id="themeBtn" onclick="toggleTheme()">🌓</button>
    </div>
    <div class="search-box">
      <input type="text" class="search-input" id="searchInput" placeholder="Search documentation..." oninput="handleSearch()">
    </div>
    <div class="tree-container" id="treeContainer"></div>
  </aside>

  <main id="main">
    <div class="top-bar">
      <span id="activePath">Select a document from the sidebar</span>
      <button onclick="copyMarkdown()" style="background:transparent;border:none;color:var(--primary);cursor:pointer;font-family:var(--font-sans);font-size:12px;">Copy Markdown</button>
    </div>
    <div class="doc-viewer">
      <article class="markdown-body" id="contentArea"></article>
    </div>
  </main>

  <script>
    const FILE_TREE = ${JSON.stringify(fileTree, null, 2)};
    const DOCS_DATA = ${JSON.stringify(docsData)};
    let activePath = '';

    function toggleTheme() {
      document.documentElement.classList.toggle('dark');
      document.documentElement.classList.toggle('light');
    }

    function renderTree(nodes, container) {
      container.innerHTML = '';
      nodes.forEach(node => {
        if (node.type === 'directory') {
          const dirDiv = document.createElement('div');
          dirDiv.className = 'tree-node';
          dirDiv.innerHTML = \`<div class="tree-dir-title">📁 \${node.name}</div><div class="tree-dir-children" style="padding-left:8px;"></div>\`;
          renderTree(node.children, dirDiv.querySelector('.tree-dir-children'));
          container.appendChild(dirDiv);
        } else {
          const fileA = document.createElement('div');
          fileA.className = 'tree-file' + (node.path === activePath ? ' active' : '');
          fileA.innerHTML = \`📄 \${node.name}\`;
          fileA.onclick = () => loadDoc(node.path);
          container.appendChild(fileA);
        }
      });
    }

    function loadDoc(path) {
      activePath = path;
      document.getElementById('activePath').textContent = '.tailorai/' + path;
      const content = DOCS_DATA[path] || '# Document Not Found';
      
      marked.setOptions({
        highlight: function(code, lang) {
          const language = hljs.getLanguage(lang) ? lang : 'plaintext';
          return hljs.highlight(code, { language }).value;
        },
        gfm: true,
        breaks: true
      });

      document.getElementById('contentArea').innerHTML = marked.parse(content);
      renderTree(FILE_TREE, document.getElementById('treeContainer'));
    }

    function copyMarkdown() {
      if (activePath && DOCS_DATA[activePath]) {
        navigator.clipboard.writeText(DOCS_DATA[activePath]);
        alert('Copied markdown to clipboard!');
      }
    }

    function handleSearch() {
      const q = document.getElementById('searchInput').value.toLowerCase();
      if (!q) {
        renderTree(FILE_TREE, document.getElementById('treeContainer'));
        return;
      }
      const matches = Object.keys(DOCS_DATA).filter(p => p.toLowerCase().includes(q) || DOCS_DATA[p].toLowerCase().includes(q));
      const container = document.getElementById('treeContainer');
      container.innerHTML = '';
      matches.forEach(p => {
        const item = document.createElement('div');
        item.className = 'tree-file';
        item.innerHTML = \`🔍 \${p}\`;
        item.onclick = () => loadDoc(p);
        container.appendChild(item);
      });
    }

    if (DOCS_DATA['README.md']) {
      loadDoc('README.md');
    } else if (Object.keys(DOCS_DATA).length > 0) {
      loadDoc(Object.keys(DOCS_DATA)[0]);
    }
  </script>
</body>
</html>
`;

fs.writeFileSync(outputFile, htmlTemplate, 'utf8');
console.log(`✅ Explorer generated successfully: ${outputFile} (${(Buffer.byteLength(htmlTemplate) / 1024).toFixed(1)} KB)`);
