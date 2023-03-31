import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import * as dotenv from 'dotenv'
dotenv.config()


export const connectDb : TypeOrmModuleOptions = {
    type: 'postgres',
    host: process.env.DB_HOST ,
    port:5432,
    password : String(process.env.DB_PASSWORD),
    username: process.env.DB_USERNAME,
    database : process.env.DATABASE,
    entities : [

    ],
    autoLoadEntities: true,
    synchronize : true
}
