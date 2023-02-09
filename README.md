# Hexonics Blog Service

Blog micro service for the Hexonics site. The structure is a mono repo with an Express API and React Front end, which is designed to be a module frederated micro frontend

_Structure_

```
Blog Service
│
└───API (Express)
│   └─── Persistence (MongoDB)
└───View (React)
```

## TRPC

https://trpc.io/docs/express

GET http://localhost:4000/trpc/getUser?input=%221%22

POST http://localhost:4000/trpc/createUser

## Todo

- Tidy file structure api
- Setup trpc with react
- write spec doc
- setup prettier and eslint
- create blog model + orm
- setup mongoDB
- backend testing
- frontend testing
