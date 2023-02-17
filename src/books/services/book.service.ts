import { Injectable, NotFoundException } from '@nestjs/common';
import { BOOKS_DATA } from '../database/books-data';
import { CreateBookDTO } from '../dtos/create-book.dto';
import { Book } from '../interfaces/book.interface';

@Injectable()
export class BookService {
  books: Book[] = BOOKS_DATA;

  async findAll(): Promise<Book[]> {
    return Promise.resolve(this.books);
  }

  async findById(bookId: string): Promise<Book> {
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
