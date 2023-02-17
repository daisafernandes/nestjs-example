import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Query,
  Body,
} from '@nestjs/common';
import { CreateBookDTO } from './dtos/create-book.dto';
import { BookService } from './services/book.service';

@Controller('books')
export class BookController {
  constructor(private booksService: BookService) {}

  @Get()
  async getBooks() {
    const books = await this.booksService.findAll();
    return books;
  }

  @Get(':bookId')
  async getBook(@Param('bookId') bookId: number) {
    const book = await this.booksService.findById(bookId);
    return book;
  }

  @Post()
  async addBook(@Body() createBookDTO: CreateBookDTO) {
    const book = await this.booksService.create(createBookDTO);
    return book;
  }

  @Delete()
  async removeBook(@Query('bookId') bookId: number) {
    const book = await this.booksService.delete(bookId);
    return book;
  }
}
