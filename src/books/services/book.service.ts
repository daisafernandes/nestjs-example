import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { BOOKS } from '../database/books';
import { BookDTO } from '../dtos/book.dto';
import { CreateBookDTO } from '../dtos/create-book.dto';

@Injectable()
export class BookService {
  books = BOOKS;

  async getBooks(): Promise<BookDTO[]> {
    return this.books;
  }

  async getBook(bookId: number): Promise<BookDTO> {
    const book = this.books.find((book) => book.id === bookId);
    if (!book) {
      throw new NotFoundException('Book does not exist!');
    }
    return book;
  }

  async addBook(book: CreateBookDTO): Promise<void> {
    this.books.push(book);
  }
}
