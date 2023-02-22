import express from "express"
import { router } from "./routes"
import "reflect-metadata"
import { AppDataSource } from "./data-source"


AppDataSource.initialize()
    .then(() => {
        const app = express()

        app.use(express.json())

        app.use(router)

        app.listen(4444, () => console.log("Server is running"))
    })
    .catch((error) => console.log(error))
