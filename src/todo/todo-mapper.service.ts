import { Injectable } from '@nestjs/common';
import { Todo } from './todo.entity';
import { TodoDTO } from './dtos/todo.dto';

@Injectable()
export class TodoMapperService {
  public modelToDto({ id, title, completed }: Todo): TodoDTO {
    return new TodoDTO({ id, title, completed });
  }
}
