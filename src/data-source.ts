
import "reflect-metadata"
import { DataSource } from "typeorm"
import { userMigration } from "./migrations/1676858985886-default"
import { User } from "./model/userModel"


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "amdrafa",
    password: "rafa123",
    database: "soul-database",
    entities: [User],
    migrations: [userMigration],
    synchronize: true,
    logging: false,
})


// to initialize initial connection with the database, register all entities
// and "synchronize" database schema, call "initialize()" method of a newly created database
// once in your application bootstrap
