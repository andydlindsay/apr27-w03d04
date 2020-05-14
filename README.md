# W3D4 Security & Real World HTTP Servers

### To Do
- [x] Storing passwords
- [x] Encrypted cookies
- [x] HTTP Secure (HTTPS)
- [x] REST
- [x] More HTTP methods
- [x] Method Override
- [x] Express Middleware
- [ ] Modular Routing
- [ ] JSON API's
- [x] Alternatives to ExpressJS

### RESTful
- /urls/:short_url
- /u/:short_url
- /login
- REpresentational State Transfer

posts, messages, tweets, videos, users
BREAD CRUD

Browse  GET /resource (eg. GET /users)
Read    GET /resource/:id (eg. GET /users/2, GET /posts/15)
Edit    POST /resource/:id
Add     POST /resource
Delete  POST /resource/:id/delete

posts, comments
Browse  GET /posts/:id/comments
Read    GET /posts/:id/comments/:comment_id

PUT     - replace the underlying resource
PATCH   - update the resource in place
DELETE  - delete the resource

Browse  GET     /resource
Read    GET     /resource/:id
Edit    PATCH   /resource/:id
Add     POST    /resource
Delete  DELETE  /resource/:id
