import { IsEmail, IsNotEmpty, IsNumber, IsString, Length, MinLength } from "class-validator"
export class CreateUserDto {
    @IsEmail({}, {
        message: 'Invalid email',
    })
    @IsNotEmpty({
        message: 'Email is required',
    })
    email: string;
    @IsString({ message: "the password must be a string " })
    @IsNotEmpty({
        message: "password is required"
    })
    @MinLength(6, {
        message: 'Password must be at least 6 characters long',
    })
    password: string;
    @IsString({ message: "the name must be a string " })
    firstname: string;
    @IsString({ message: "the name must be a string " })
    lastname: string;
    @IsNumber()
    phonenumber: number;
    address: string;
}