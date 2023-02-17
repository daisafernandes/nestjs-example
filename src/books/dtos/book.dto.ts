import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class BookDTO {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiPropertyOptional()
  description: string;

  @ApiProperty()
  author: string;
}
