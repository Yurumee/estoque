import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TUsuario } from "./entities/user.entity";
import { JwtModule } from '@nestjs/jwt'

@Module({
    // importa a tabela para ser usada pelas querys
    // importa o modulo de registo de tokens jwt para registrar de decodificar tokens
    imports: [TypeOrmModule.forFeature([TUsuario]), JwtModule.register({})],
    // controllers e suas demais rotas
    providers: [AuthService],
    // serviços, isto é, o código que a rota realiza quando é chamada pelo controller
    controllers: [AuthController],
    // exportação para ser usado pelo controller e service
    exports: [TypeOrmModule]
})

export class authModule {}