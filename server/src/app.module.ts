import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './task/task.entity';
import { dbConfig } from './config/db.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(dbConfig),
    TypeOrmModule.forFeature([Task]),
    TaskModule,
  ],
})
export class AppModule {}
