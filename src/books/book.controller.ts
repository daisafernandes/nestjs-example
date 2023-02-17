import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Query,
  Body,
  NotFoundException,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BookDTO } from './dtos/book.dto';
import { CreateBookDTO } from './dtos/create-book.dto';
import { BookService } from './services/book.service';

@ApiTags('books')
@Controller('books')
export class BookController {
  constructor(private booksService: BookService) {}

  @Get()
  @ApiOperation({ summary: 'Get all books' })
  @ApiResponse({
    status: 200,
    description: 'Return all books.',
    type: BookDTO,
    isArray: true,
  })
  async getBooks(): Promise<BookDTO[]> {
    const books = await this.booksService.findAll();
    return books;
  }

  @Get(':bookId')
  @ApiOperation({ summary: 'Get book by id' })
  @ApiResponse({
    status: 200,
    description: 'Return book by id.',
    type: BookDTO,
  })
  @ApiResponse({
    status: 404,
    description: 'Book not found.',
    type: NotFoundException,
  })
  async getBook(@Param('bookId') bookId: string) {
    const book = await this.booksService.findById(bookId);
    return book;
  }

  @Post()
  @ApiOperation({ summary: 'Create a new book' })
  @ApiResponse({
    status: 201,
    description: 'The book has been successfully created.',
  })
  async addBook(@Body() createBookDTO: CreateBookDTO) {
    const book = await this.booksService.create(createBookDTO);
    return book;
  }

  @Delete()
  @ApiOperation({ summary: 'Delete the book' })
  @ApiResponse({
    status: 204,
    description: 'The book has been successfully deleted.',
  })
  @ApiResponse({
    status: 404,
    description: 'Book not found.',
    type: NotFoundException,
  })
  async removeBook(@Query('bookId') bookId: string) {
    const book = await this.booksService.delete(bookId);
    return book;
  }
}
