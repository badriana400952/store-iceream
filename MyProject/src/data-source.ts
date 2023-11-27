import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import {Product} from "./entity/Product"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "viaduct.proxy.rlwy.net",
    port: 46304,
    username: "postgres",
    password: "64adaAGAgadDceaEcAe-5dfga*dD5**5",
    database: "railway",
    synchronize: true,
    logging: false,
    entities: ["src/entity/*.ts"],
    migrations: ["src/migration/*.ts"],
    subscribers: [],
})
