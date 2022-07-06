import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn('uuid')
  public id!: string;

  @Column()
  public title: string;

  @Column()
  public completed: boolean;

  public constructor(title: string) {
    this.title = title;
    this.completed = false;
  }
}
