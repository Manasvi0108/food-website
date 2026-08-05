# Threat Model

## System Overview

- Frontend: static HTML/CSS/JS served via [hosting provider]
- Future backend: Node.js/Express or similar
- Data: user input (search, location), later accounts & orders

## Assets

- User input data
- Future: user credentials, session tokens, order history
- API keys and secrets (`.env`)

## Trust Boundaries

- Browser ↔ Server (HTTPS)
- Server ↔ Database
- Developer machine ↔ Repository

## Threat Actors

- External attackers (automated scanners, script kiddies)
- Malicious users
- Compromised dependencies

## Main Threats

- XSS via search/inputs
- CSRF on state-changing endpoints (future)
- Secret leakage (API keys, DB passwords)
- Insecure dependencies
- Misconfigured headers/CSP

## Mitigations (High Level)

- Input validation & output encoding
- CSP headers
- Secrets in environment variables only
- Dependency scanning
- Regular security reviews