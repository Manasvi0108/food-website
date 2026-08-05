# Security Report

## Known Issues

| ID | Description                      | Severity | Status   | Notes                     |
|----|----------------------------------|----------|----------|---------------------------|
| 1  | Basic XSS via search input       | Medium   | Fixed    | Sanitization added        |
| 2  | Missing CSP header               | Medium   | Fixed    | Meta CSP added            |
| 3  | No rate limiting on search       | Low      | Fixed    | Client-side rate limit    |

## Past Incidents

None so far.

## Recommendations

- Add server-side validation for all inputs.
- Implement proper rate limiting on the backend.
- Add logging and monitoring for suspicious activity.