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
    const books = await this.booksService.getBooks();
    return books;
  }

  @Get(':bookId')
  async getBook(@Param('bookId') bookId: number) {
    const book = await this.booksService.getBook(bookId);
    return book;
  }

  @Post()
  async addBook(@Body() createBookDTO: CreateBookDTO) {
    const book = await this.booksService.addBook(createBookDTO);
    return book;
  }
}
