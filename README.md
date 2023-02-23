# Hexonics Blog Service

Blog micro service for the Hexonics site. The structure is a mono repo with an tRPC Express API and React Front end, which is designed to be a module frederated micro frontend

_Structure_

```
Blog Service
│
└───Server (tRPC / Express)
│   └─── Persistence (MongoDB)
└───Client (React)
```

## MongoDB

docker pull mongo:latest

```bash
sudo docker run -p 27017 --name mongo-db -d mongo:latest
```

## Testing

tbc ...

## Local development

tbc ...

## tRPC

tbc .. describe

## Zod

tbc ..... describe

## Routes & Thunder Client

A list of all available endpoints are stored in the `/thunder-tests` directory. and are available as a collection using the `thunder client` vs code extension.

Install the [Thunder Client extenstion](https://github.com/rangav/thunder-client-support).

In extension settings select `Save To Workspace`

in `./packages/server` `npm run start` to start a local version of the server.

You can make requests to the dev endpoints from the Thunder Client Extension

## Todo

- ~~Tidy file structure api~~
- Setup trpc with react
- write spec doc
- setup prettier and eslint
- create blog model + orm
- setup mongoDB
- backend testing
- frontend testing
- impliment logger
