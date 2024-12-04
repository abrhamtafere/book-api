import { IsString, IsInt, Min, Max, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'Name must be a string custom error message' })
  name: string;

  @IsEmail()
  email: string;

  @IsInt()
  @Min(18)
  @Max(120)
  age: number;
}
