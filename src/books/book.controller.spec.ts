import { Test, TestingModule } from '@nestjs/testing';
import { BookController } from './book.controller';
import { BookService } from './services/book.service';

describe('BookController', () => {
  let appController: BookController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BookController],
      providers: [BookService],
    }).compile();

    appController = app.get<BookController>(BookController);
  });

  describe('root', () => {
    it('should return a book', () => {
      expect(appController.getBook(12346)).toBe('Hello World!');
    });
  });
});
