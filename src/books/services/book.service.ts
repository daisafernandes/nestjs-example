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

  async findById(bookId: string): Promise<BookDTO> {
    const id = Number(bookId);
    const book = this.books.find((b) => b.id === id);
    if (!book) {
      throw new NotFoundException(`Book id ${bookId} does not exist!`);
    }
    return Promise.resolve(book);
  }

  async create(book: CreateBookDTO): Promise<void> {
    Promise.resolve(this.books.push(book));
  }

  async delete(bookId: string): Promise<void> {
    const id = Number(bookId);
    const index = this.books.findIndex((b) => b.id === id);
    if (index < 0) {
      return Promise.reject(
        new NotFoundException(`Book id ${bookId} does not exist!`),
      );
    }
    Promise.resolve(this.books.splice(index, 1));
  }
}
