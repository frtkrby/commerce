import { Controller, Get } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('/todo')
export class TodoController {
  public constructor(private readonly todoService: TodoService) {}

  @Get()
  public async todos() {
    return await this.todoService.getAll();
  }
}
