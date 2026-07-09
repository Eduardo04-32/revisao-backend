import typeorm = require("typeorm");
import * as dotenv from "dotenv"

dotenv.config()

const { DB_HOST, DB_PORT, DB_USER, DB_PWD, DB_NAME } = process.env

export const AppDataSource = new typeorm.DataSource({
    type: "mysql",
    host: DB_HOST,
    port: Number(DB_PORT),
    username: DB_USER,
    password: DB_PWD,
    database: DB_NAME,
    entities: [],
    synchronize: true,
    logging: false,
})