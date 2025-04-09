import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Query,
  Put,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task.entity';
import { FilterTaskDto } from './dto/filter-task.dto';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async getTasks(@Query() filters: FilterTaskDto): Promise<Task[]> {
    return this.taskService.findAll(filters);
  }

  @Post()
  async createTask(@Body() dto: CreateTaskDto): Promise<Task> {
    return this.taskService.create(dto);
  }

  @Put(':id')
  async updateTask(
    @Param('id') id: string,
    @Body() dto: UpdateTaskDto,
  ): Promise<Task> {
    console.log(id);
    return this.taskService.update(Number(id), dto);
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: string): Promise<void> {
    return this.taskService.remove(Number(id));
  }
}
