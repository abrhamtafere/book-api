import { IsString, IsInt, Min, Max } from 'class-validator';

export class CreateBookDto {
  @IsString() // This ensures the title is a string
  title: string;

  @IsString() // This ensures the author is a string
  author: string;

  @IsInt() // This ensures the year is an integer
  @Min(1900) // Minimum year should be 1900
  @Max(new Date().getFullYear()) // Maximum year should be the current year
  year: number;
}
