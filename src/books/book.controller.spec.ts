import { Test, TestingModule } from '@nestjs/testing';
import { BookController } from './book.controller';
import { mockBook, mockBookList } from './mocks/books.mock';
import { BookService } from './services/book.service';

describe('BookController', () => {
  let controller: BookController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BookController],
      providers: [BookService],
    }).compile();

    controller = app.get<BookController>(BookController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('root', () => {
    it('should return a book', async () => {
      expect(await controller.getBook(1)).toMatchObject(mockBook);
    });

    it('should return a list of books', async () => {
      expect(await controller.getBooks()).toMatchObject(mockBookList);
    });

    it('should add a new book', async () => {
      expect(await controller.addBook(mockBook)).toBeUndefined();
    });
  });
});
