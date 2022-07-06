import { IsString, IsNotEmpty, MaxLength } from 'class-validator';

export class AddTodoDto {

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  public readonly title: string;

  public constructor(opts?: Partial<AddTodoDto>) {
    Object.assign(this, opts);
  }
}
