export class createTodoDTO {
  id?: number;
  title: string;
  description: string;
  done: boolean;
}

export class updateTodoDTO {
  id?: number;
  title?: string;
  description?: string;
  done?: boolean;
}
