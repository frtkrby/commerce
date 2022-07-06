import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';

@Injectable()
export class TodoService {
  public constructor(
    @InjectRepository(Todo) private readonly repository: Repository<Todo>,
  ) {}

  public async getAll() {
    return await this.repository.find();
  }
}
