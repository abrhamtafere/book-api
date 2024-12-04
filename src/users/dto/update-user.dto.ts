import { IsString, IsInt, Min, Max, IsEmail, IsOptional } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsInt()
  @Min(18)
  @Max(120)
  @IsOptional()
  age?: number;
}
