YT Video Link:- https://www.youtube.com/watch?v=7-aY-tS2LhE&t=24s

Diagrams / Notes :- https://app.eraser.io/workspace/eW4G5fPRZ6QykVly1Osu

socket.io - Implements all real time Features / Real Time Communication

devDependencies means dependencies which are only needed for development purposes. eg:- nodemon

In models in backend, we can create files(models) such as User.js or user.model.js(where .model says that this is a model and does not represent an extension.)
{ timestamps: true } ==> This Adds createdAt & updatedAt fields in Database.

import { connectDB } from "./lib/db.js" , here we need to add .js at end as we are using the "import" syntax and when we import any local module in import syntax, we always add .js at end

Authentication:- Using Clerk Middleware, Clerk is a Library

CORS:- Cross Origin Resource Sharing :- Browser Security Rule

app.use(cors({ origin: FRONTEND_URL, credentials: true })) :- ithe credentials means allow the client to send the cookies or the auth headers with the request

