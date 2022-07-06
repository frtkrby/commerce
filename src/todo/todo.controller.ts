import { Controller, Get, Post, Body, Param, Delete, Put, Query  } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoDTO } from './dtos/todo.dto';
import { AddTodoDto } from './dtos/addtodo.dto';
import { EditTodoDto } from './dtos/edittodo.dto';

@Controller('/todo')
export class TodoController {
  public constructor(private readonly todoService: TodoService) {}

  @Get('?')
  public async todos(@Query('status') status: string) {
    return await this.todoService.getAll(status);
  }

  @Get(':id')
  public findOne(@Param('id') id: string): Promise<TodoDTO> {
      return this.todoService.getOne(id);
  }

  @Post()
  public add(@Body() todo: AddTodoDto): Promise<TodoDTO> {
    return this.todoService.addTodo(todo);
  }

  @Delete(':id')
  public remove(@Param('id') id: string): Promise<TodoDTO> {
      return this.todoService.deleteTodo(id);
  }

  @Put(':id')
  public edit(@Param('id') id: string, @Body() todo: EditTodoDto): Promise<TodoDTO> {
      return this.todoService.updateTodo(id, todo);
  }
}
