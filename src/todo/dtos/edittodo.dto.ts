import { IsString, IsNotEmpty, MaxLength, IsBoolean } from 'class-validator';

export class EditTodoDto {

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  public readonly title: string;

  @IsBoolean()
  public readonly completed: boolean;

  public constructor(opts?: Partial<EditTodoDto>) {
    Object.assign(this, opts);
  }

}