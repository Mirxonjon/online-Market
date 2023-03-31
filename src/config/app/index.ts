import { registerAs } from "@nestjs/config";

class AppConfig  {
    readonly host: string;
    readonly port: number;
}


export const appConfig = registerAs(
 'app',
 () : AppConfig => ({
    host: process.env.HOST ? String(process.env.HOST) : undefined,
    port: process.env.PORT ? Number(process.env.PORT) : undefined
 })
)