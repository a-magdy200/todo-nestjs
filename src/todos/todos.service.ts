import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';
import { AppDataSource } from '../config/data-source';

@Injectable()
export class TodosService {
  todoRepository = AppDataSource.getRepository(Todo);
  async create(createTodoDto: CreateTodoDto) {
    const insertResult = await this.todoRepository.insert(createTodoDto);
    return this.findOne(insertResult.generatedMaps[0].id);
  }

  async findAll() {
    return await this.todoRepository.find();
  }

  async findOne(id: number) {
    return await this.todoRepository.findOneBy({ id });
  }

  async update(id: number, updateTodoDto: UpdateTodoDto) {
    await this.todoRepository.update({ id }, updateTodoDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.todoRepository.delete({ id });
    return true;
  }
}
