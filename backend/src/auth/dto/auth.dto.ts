import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator"

export class authDto {
    @IsString()
    @IsNotEmpty()
    login: string;

    // @IsEmail()
    // @IsNotEmpty()
    // email: string;

    @IsString()
    @MinLength(4)
    @IsNotEmpty()
    senha: string;
}
