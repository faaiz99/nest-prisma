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
import { todoDto } from './todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.todoService.getTodoById(parseInt(id.toString()));
  }

  @Get()
  findAll() {
    return this.todoService.getAllTodos();
  }

  @Post()
  create(@Body() todoDto: todoDto) {
    return this.todoService.createTodo(todoDto);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.todoService.deleteTodo(parseInt(id.toString()));
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() todoDto: todoDto) {
    return this.todoService.updateTodo(parseInt(id.toString()), todoDto);
  }
}
