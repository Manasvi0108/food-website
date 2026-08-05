# API Security Guidelines

## Authentication

- Use JWT or session-based auth.
- Tokens must be short-lived; use refresh tokens if needed.
- Never store tokens in localStorage; prefer httpOnly cookies.

## Authorization

- Enforce RBAC on every endpoint.
- Validate resource ownership (users can only access their own data).

## Input Validation

- Validate all inputs on the server.
- Use allowlists for enums, patterns for strings.
- Reject unknown fields or strip them.

## Rate Limiting

- Rate limit per IP and per user.
- Stricter limits on auth endpoints.

## Error Handling

- Do not leak stack traces or internal details.
- Use generic error messages to clients.

## Logging & Monitoring

- Log auth failures, suspicious patterns, and rate-limit hits.
- Mask sensitive data (passwords, tokens, PII).