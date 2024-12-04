import { IsString, IsInt, Min, Max, IsOptional } from 'class-validator';

export class UpdateBookDto {
  @IsString()
  @IsOptional() // This makes the title optional during an update
  title?: string;

  @IsString()
  @IsOptional() // This makes the author optional during an update
  author?: string;

  @IsInt()
  @Min(1900)
  @Max(new Date().getFullYear())
  @IsOptional() // This makes the year optional during an update
  year?: number;
}
