import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DatabaseService } from "./database.service";


@Module({
     imports: [
          TypeOrmModule.forRootAsync({
               inject: [ConfigService],
               useFactory: (config: ConfigService) => ({
                    type: 'postgres',
                    host: config.getOrThrow<string>('database.host'),
                    port: config.getOrThrow<number>('database.port'),
                    username: config.getOrThrow<string>('database.username'),
                    password: config.getOrThrow<string>('database.password'),
                    database: config.getOrThrow<string>('database.name'),
                    autoLoadEntities: true,
                    retryAttempts: 3,
                    retryDelay: 3000,
               }),

          })
     ],
     providers: [DatabaseService],
     exports: []
})
export class DatabaseModule { }