import {
     Injectable,
     Logger,
     OnApplicationBootstrap,
     OnApplicationShutdown,
} from '@nestjs/common';

import { DataSource } from 'typeorm';

@Injectable()
export class DatabaseService
     implements OnApplicationBootstrap, OnApplicationShutdown {
     private readonly logger = new Logger('Database');

     constructor(
          private readonly dataSource: DataSource,
     ) { }

     async onApplicationBootstrap() {
          if (this.dataSource.isInitialized) {
               this.logger.log(
                    'PostgreSQL connection established successfully.',
               );

               this.logger.log(
                    `Database: ${this.dataSource.options.database}`,
               );
          } else {
               this.logger.error(
                    'PostgreSQL connection is not initialized.',
               );

               throw new Error('Database initialization failed.');
          }
     }

     async onApplicationShutdown() {
          this.logger.log('Database connection shutdown initiated.');
     }
}