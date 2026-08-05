# RBAC Design

## Roles

- **Guest**: Unauthenticated user; can browse, search.
- **User**: Authenticated customer; can place orders, view history.
- **Admin**: Manage menu, restaurants, users.
- **Support**: View orders, assist users, no destructive actions.

## Permissions (Example)

| Action                  | Guest | User | Admin | Support |
|-------------------------|-------|------|-------|---------|
| View menu               | ✅    | ✅   | ✅    | ✅      |
| Search restaurants      | ✅    | ✅   | ✅    | ✅      |
| Place order             | ❌    | ✅   | ✅    | ❌      |
| View own orders         | ❌    | ✅   | ✅    | ❌      |
| Manage menu             | ❌    | ❌   | ✅    | ❌      |
| Manage users            | ❌    | ❌   | ✅    | ❌      |
| View all orders         | ❌    | ❌   | ✅    | ✅      |

## Implementation Notes

- Enforce RBAC on the server, never trust client.
- Use JWT with role claim; validate on every request.
- Least privilege: default deny, explicitly allow.