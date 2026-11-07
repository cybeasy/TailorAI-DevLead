# Storage & Media Handling Protocol (Storage_Protocol.md) 📦🔒

> **Location:** `.tailorai/Protocols/Storage_Protocol.md`  
> **Status:** MANDATORY & ENFORCED

---

## 1. Storage Architecture & Cloud Portability

1. **Storage Abstraction:** All file operations (uploads, deletions, URL generation) must go through the framework's file storage abstraction driver (`Storage::disk(...)` or an S3-compatible SDK client). Never write directly to local disk paths like `/uploads` in production.
2. **Cloud Portability:** The system must seamlessly support local S3 emulators (MinIO), Cloudflare R2, AWS S3, or Google Cloud Storage simply by updating environment variables.
3. **Public vs. Private Asset Isolation:**
   - **Public Media (`public/`):** Logos, public avatars, marketing images. Served via CDN / static caching headers.
   - **Private / Sensitive Documents (`private/`):** Identity documents, invoices, signed contracts, medical/financial files. Must NOT be publicly accessible via direct URL. Access requires signed temporary URLs or authenticated proxy downloads.

---

## 2. File Ingestion & Security Checklist

Every file upload endpoint MUST enforce:
1. **MIME-Type & Magic Byte Verification:** Do not rely solely on user-supplied file extensions. Validate real binary MIME headers on the backend.
2. **Strict Size Limits:** Enforce maximum upload thresholds per file type (e.g., images: 5MB, documents: 20MB).
3. **Filename Sanitization:** Never store files using raw client-supplied filenames. Generate a cryptographically random UUID or timestamped slug:
   ```text
   {entity_type}/{entity_id}/{hash_or_uuid}.{ext}
   ```
4. **Malicious Payload Mitigation:** Strip EXIF metadata from uploaded images to protect user privacy and prevent script injection.

