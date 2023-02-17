import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateBookDTO {
  @IsNumber()
  @ApiProperty()
  @IsNotEmpty()
  readonly id: number;

  @IsNotEmpty({ message: 'não pode ser vazio' })
  @MaxLength(50)
  @IsString()
  @ApiProperty()
  readonly title: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly description: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  readonly author: string;
}
