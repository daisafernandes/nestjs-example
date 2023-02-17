import { IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';

export class CreateBookDTO {
  @IsNumber()
  readonly id: number;

  @IsNotEmpty({ message: 'title can not be empty' })
  @MaxLength(50)
  readonly title: string;

  @IsOptional()
  readonly description: string;

  @IsNotEmpty()
  readonly author: string;
}
