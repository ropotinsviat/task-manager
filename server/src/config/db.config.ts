import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Task } from '../task/task.entity';

export const dbConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Task],
  synchronize: true,
};
