import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Put,
  Param,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { createTodoDTO, updateTodoDTO } from './todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get(':id')
  findOne(@Param('id') id: number) {
    const todoDTO = new updateTodoDTO();
    todoDTO.id = id;
    return this.todoService.getTodoById(todoDTO.id);
  }

  @Get()
  findAll() {
    return this.todoService.getAllTodos();
  }

  @Post()
  create(@Body() todoDto: createTodoDTO) {
    const todoDTO = new createTodoDTO();
    todoDTO.title = todoDto.title;
    todoDTO.description = todoDto.description;
    todoDTO.done = todoDto.done;
    return this.todoService.createTodo(todoDTO);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    const todoDTO = new updateTodoDTO();
    todoDTO.id = id;
    return this.todoService.deleteTodo(todoDTO.id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() todoDto: updateTodoDTO) {
    const todoDTO = new updateTodoDTO();
    todoDTO.id = todoDto.id;
    todoDTO.title = todoDto.title;
    todoDTO.description = todoDto.description;
    todoDTO.done = todoDto.done;
    return this.todoService.updateTodo(todoDTO.id, todoDTO);
  }
}
