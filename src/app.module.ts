import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './todo.db',
      entities: ['**/*.entity.js'],
      synchronize: true,
      logging: true,
    }),
    TodoModule,
  ],
})
export class AppModule {}
