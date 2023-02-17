import { Injectable, NotFoundException } from '@nestjs/common';
import { BOOKS_DATA } from '../database/books-data';
import { BookDTO } from '../dtos/book.dto';
import { CreateBookDTO } from '../dtos/create-book.dto';

@Injectable()
export class BookService {
  books: BookDTO[] = BOOKS_DATA;

  async findAll(): Promise<BookDTO[]> {
    return Promise.resolve(this.books);
  }

  async findById(bookId: number): Promise<BookDTO> {
    const book = this.books.find((b) => b.id === bookId);
    if (!book) {
      throw new NotFoundException('Book does not exist!');
    }
    return Promise.resolve(book);
  }

  async create(book: CreateBookDTO): Promise<void> {
    Promise.resolve(this.books.push(book));
  }

  async delete(bookId: number): Promise<void> {
    const index = this.books.findIndex((b) => b.id === bookId);
    if (index < 0) {
      return Promise.reject(new NotFoundException(`Book ${bookId} not found.`));
    }
    this.books.splice(index, 1);
    return Promise.resolve();
  }
}
