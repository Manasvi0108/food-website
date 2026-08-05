# Security Checklist

## Code

- [ ] No secrets in code or configs
- [ ] Input validation on all user-provided data
- [ ] Output encoding to prevent XSS
- [ ] No `eval()`, `innerHTML` with unsanitized data
- [ ] CSP in place and tested

## Dependencies

- [ ] `npm audit` / `yarn audit` run and issues addressed
- [ ] Unused dependencies removed

## Deployment

- [ ] HTTPS enforced
- [ ] Security headers configured (CSP, X-Frame-Options, etc.)
- [ ] `.env` not committed
- [ ] Error messages do not leak stack traces or internals

## Process

- [ ] Security review performed before release
- [ ] Vulnerability reporting process documented