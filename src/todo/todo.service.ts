import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StringDecoder } from 'string_decoder';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';
import { TodoDTO } from './dtos/todo.dto';
import { AddTodoDto } from './dtos/addtodo.dto';
import { EditTodoDto } from './dtos/edittodo.dto';
import { TodoMapperService } from './todo-mapper.service';

@Injectable()
export class TodoService {
  public constructor(
    @InjectRepository(Todo) private readonly repository: Repository<Todo>,
    private readonly todoMapper: TodoMapperService,
  ) {}

  public async getAll(status: string) {
    let filter = {};
    if(status) {
      filter = {
        where: { 
            completed: (status === 'true')
        }
      }
    }
    console.log("filter", filter);
    return await this.repository.find(filter);
  }

  public async getOne(id: string) {
    return await this.repository.findOneBy({ id });
  }

  public async addTodo({ title }: AddTodoDto): Promise<TodoDTO> {
    let todo = new Todo(title);
    todo = await this.repository.save(todo);
    return this.todoMapper.modelToDto(todo);
  }

  public async deleteTodo(id: string): Promise<Todo> {
    let todo = await this.repository.findOneBy({ id });
    
    if (!todo) throw new NotFoundException();

    todo = await this.repository.remove(todo);

    return todo;
  }

  public async updateTodo(id: string, { title, completed }: EditTodoDto): Promise<TodoDTO> {
    let todo = await this.repository.findOneBy({ id });

    if (!todo) throw new NotFoundException();

    todo.completed = completed;
    todo.title = title;

    todo = await this.repository.save(todo);

    return this.todoMapper.modelToDto(todo);
  }

}
