import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class produtoDto {
    @IsString()
    @IsNotEmpty()
    nomeItem: string;

    @IsNumber()
    @IsNotEmpty()
    precoItem: number;

    @IsString()
    marcaPref: string;

    @IsString()
    marcaAlt: string;

    @IsString()
    @IsNotEmpty()
    categoria: string;

    // @IsNumber()
    // @IsNotEmpty()
    // estoqueAtual: number;

    // @IsNumber()
    // @IsNotEmpty()
    // estoqueUso: number;

    @IsDate()
    @IsNotEmpty()
    dataCriacao: Date;

    @IsDate()
    @IsNotEmpty()
    ultAtualizacao: Date;
}