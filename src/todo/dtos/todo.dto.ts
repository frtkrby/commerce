export class TodoDTO {
  public readonly id: string;
  public readonly title: string;
  public readonly completed: boolean;

  public constructor(opts?: Partial<TodoDTO>) {
    Object.assign(this, opts);
  }
}
