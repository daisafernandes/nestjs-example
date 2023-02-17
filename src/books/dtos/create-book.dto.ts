import { IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';

export class CreateBookDTO {
  @IsNumber()
  readonly id: number;

  @IsNotEmpty({ message: 'não pode ser vazio' })
  @MaxLength(50)
  readonly title: string;

  @IsOptional()
  readonly description: string;

  @IsNotEmpty()
  readonly author: string;
}
