# Real-Time & WebSocket Protocol (WebSocket_Protocol.md) ⚡📡

> **Location:** `.tailorai/Protocols/WebSocket_Protocol.md`  
> **Status:** MANDATORY & ENFORCED

---

## 1. Real-Time Architecture Overview

- **Broadcasting Layer:** WebSockets / SSE (Server-Sent Events) powered by `{{WEBSOCKET_DRIVER}}` (e.g. Socket.io / Laravel Reverb / Redis PubSub).
- **Client Library:** Standard client listener maintaining automatic reconnect, exponential backoff, and heartbeat pings.

---

## 2. Channel Naming & Authorization Standards

Channels must follow predictable naming hierarchies:

| Channel Type | Format | Access Control |
|---|---|---|
| **Public Stream** | `public.{resource_name}` | Open to all unauthenticated clients |
| **Authenticated User** | `private.user.{user_id}` | Authenticated user session only |
| **Tenant / Workspace** | `private.tenant.{tenant_id}` | Verified tenant membership |

---

## 3. Event Envelope Contract

All real-time broadcast payloads must conform to the standard event envelope:

```json
{
  "event": "entity.updated",
  "channel": "private.tenant.tenant_123",
  "timestamp": "2026-11-07T12:00:00Z",
  "data": {
    "id": "item_987",
    "status": "completed",
    "updated_at": "2026-11-07T12:00:00Z"
  }
}
```

---

## 4. Invariants

1. **Zero Raw Secret Leaks:** Never broadcast sensitive attributes (passwords, auth tokens, internal billing keys) over WebSocket channels.
2. **Graceful Fallback:** Frontend clients must function gracefully via polling or optimistic updates if the WebSocket connection drops.

