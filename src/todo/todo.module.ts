import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoController } from './todo.controller';
import { Todo } from './todo.entity';
import { TodoService } from './todo.service';
import { TodoMapperService } from './todo-mapper.service';

@Module({
  imports: [TypeOrmModule.forFeature([Todo])],
  controllers: [TodoController],
  providers: [TodoService, TodoMapperService],
})
export class TodoModule {}
