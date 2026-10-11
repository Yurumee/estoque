import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TUsuario } from "./entities/user.entity";

@Module({
    // importa a tabela para ser usada pelas querys
    imports: [TypeOrmModule.forFeature([TUsuario])],
    // controllers e suas demais rotas
    providers: [AuthService],
    // serviços, isto é, o código que a rota realiza quando é chamada pelo controller
    controllers: [AuthController],
    // exportação para ser usado pelo controller e service
    exports: [TypeOrmModule]
})

export class authModule {}