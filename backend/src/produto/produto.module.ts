import { Module } from "@nestjs/common";
import { ProdutoController } from "./produto.controller";
import { ProdutoService } from "./produto.service";
import { TProduto } from "./entities/produto.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    // importa a tabela para ser usada pelas querys
    imports: [TypeOrmModule.forFeature([TProduto])],
    // controllers e suas demais rotas
    controllers: [ProdutoController],
    // serviços, isto é, o código que a rota realiza quando é chamada pelo controller
    providers: [ProdutoService],
    // exportação para ser usado pelo controller e service
    exports: [TypeOrmModule]
})

export class ProdutoModule {}