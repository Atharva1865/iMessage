import express from "express"
import "dotenv/config"
import cors from "cors"

import fs from "fs"
import path from "path"

import { clerkMiddleware } from '@clerk/express'
import { connectDB } from "./lib/db.js"
import job from "./lib/cron.js"

const app = express()
const PORT = process.env.PORT
const FRONTEND_URL = process.env.FRONTEND_URL

const publicDir = path.join(process.cwd(), "public");

app.use(express.json())
app.use(cors({ origin: FRONTEND_URL, credentials: true }))
app.use(clerkMiddleware())

app.get("/health", (req, res) => {
    res.status(200).json({ ok: true })
})

// if the public directory exists, serve the static files
// this is for the production build
if (fs.existsSync(publicDir)) {
    app.use(express.static(publicDir))  // React application converted to static assets

    app.get("/{*any}", (req, res, next) => {   // if we send request on any route, other than our api routes
        res.sendFile(path.join(publicDir, "index.html"), (err) => next(err))  // Sending the static files / react application 
    })
}

app.listen(PORT, () => {
    connectDB()
    console.log("Server Running on Port: ", PORT)

    if (process.env.NODE_ENV === "production") {   // If we are in production, then and then run the scheduled job
        job.start()   // Running the Scheduled Job
    }
})