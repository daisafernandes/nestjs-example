import { Test, TestingModule } from '@nestjs/testing';
import { mockBook } from '../mocks/books.mock';
import { BookService } from './book.service';

describe('BookService', () => {
  let service: BookService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [],
      providers: [BookService],
    }).compile();

    service = app.get<BookService>(BookService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('root', () => {
    it('should return a book', async () => {
      expect(await service.findById('1')).toMatchObject(mockBook);
    });

    it('should return an NotFoundException', async () => {
      await expect(service.findById('20')).rejects.toThrowError(
        'Book id 20 does not exist!',
      );
    });
  });
});
