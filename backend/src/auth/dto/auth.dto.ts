import { IsNotEmpty, IsString } from "class-validator"

export class authDto {
    @IsString()
    @IsNotEmpty()
    login: string;

    @IsString()
    @IsNotEmpty()
    senha: string;
}
