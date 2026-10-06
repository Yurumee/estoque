import { Module } from "@nestjs/common";
import { ProdutoController } from "./produto.controller";
import { ProdutoService } from "./produto.service";

@Module({
    // controllers e suas demais rotas
    controllers: [ProdutoController],
    // serviços, isto é, o código que a rota realiza quando é chamada pelo controller
    providers: [ProdutoService]
})

export class ProdutoModule {}