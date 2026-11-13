import { Module } from "@nestjs/common";
import { ConfigModule as NestJSConfigModule } from "@nestjs/config";
import configuration from "./configuration";
import { envvalidationSchema } from "./env.validation";

const environment = process.env.APP_ENV ?? "development"

@Module({
     imports: [
          NestJSConfigModule.forRoot({
               isGlobal: true,
               envFilePath: [
                    `.env.${environment}`,
                    `.env`,
               ],
               load: [configuration],
               validationSchema: envvalidationSchema,

          })
     ],
     providers: [],
     exports: []
})
export class ConfigModule { }
