import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike, FindOptionsWhere } from 'typeorm';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { FilterTaskDto } from './dto/filter-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepo: Repository<Task>,
  ) {}

  async findAll(filters: FilterTaskDto): Promise<Task[]> {
    const { titleOrDescription, completed } = filters;

    const where: FindOptionsWhere<Task>[] = [];

    if (titleOrDescription) {
      where.push(
        { title: ILike(`%${titleOrDescription}%`) },
        { description: ILike(`%${titleOrDescription}%`) },
      );
    } else {
      where.push({});
    }

    if (completed !== undefined) {
      where.forEach((condition) => (condition.completed = completed));
    }

    return this.taskRepo.find({ where: where.length > 0 ? where : undefined });
  }

  async create(dto: CreateTaskDto): Promise<Task> {
    const task = this.taskRepo.create(dto);
    return this.taskRepo.save(task);
  }

  async update(id: number, dto: UpdateTaskDto): Promise<Task> {
    await this.taskRepo.update(id, dto);
    return this.taskRepo.findOneOrFail({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.taskRepo.delete(id);
  }
}
