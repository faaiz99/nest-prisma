import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Todo, Prisma } from '@prisma/client';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}

  // Create a Todo
  createTodo(data: Prisma.TodoCreateInput): Promise<Todo> {
    return this.prisma.todo.create({
      data,
    });
  }

  // Get all Todos
  getAllTodos(): Promise<Todo[]> {
    return this.prisma.todo.findMany();
  }

  // Get a single Todo by id
  getTodoById(id: number): Promise<Todo | null> {
    return this.prisma.todo.findUnique({
      where: { id },
    });
  }

  // Update a Todo by id
  updateTodo(id: number, data: Prisma.TodoUpdateInput): Promise<Todo> {
    //const { id, data } = params;
    return this.prisma.todo.update({
      data,
      where: { id },
    });
  }

  // Delete a Todo by id
  deleteTodo(id: number): Promise<Todo> {
    return this.prisma.todo.delete({
      where: { id },
    });
  }
}
