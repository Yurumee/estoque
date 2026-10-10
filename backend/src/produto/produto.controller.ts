import { Body, Controller, Get, HttpCode, Param, Post, Patch, Delete, Req } from "@nestjs/common";
// import { NewProduto } from "./dto/novoproduto.dto";
import { ProdutoService } from "./produto.service";

@Controller('produto')
export class ProdutoController {
    // injeta o serviço, permitindo que o controller chame as rotas
    constructor(private produtoService: ProdutoService) {}

    // rota que retorna produto com id desejado
    // id precisa ser um inteiro
    // @Get(':id')
    // @HttpCode(200)
    // findProduct(@Param('id') id: number): Produtos | undefined {
    //     const prodId = id
    //     return this.produtoService.findProductId(prodId)
    // }

    // rota que retorna todos os produtos
    // pesquisa no banco de forma assincrona
    @Get()
    @HttpCode(200)
    allProducts(@Body() a: any) {
        return this.produtoService.allProducts()
    }

    // insere um novo produto de acordo com o dto
    // @Post('novo')
    // @HttpCode(201)
    // newProduct(@Body() NewProduto: Partial<Produtos>): Produtos | undefined{
    //     const novoProd = NewProduto;

    //     if (!NewProduto.nomeProd || !NewProduto.preco || !NewProduto.estoqueAtual)
    //     {
    //         return undefined
    //     }

    //     if (!NewProduto.marca)
    //     {
    //         NewProduto.marca = ''
    //     }

    //     if (!NewProduto.marcaAlternativa)
    //     {
    //         NewProduto.marcaAlternativa = ''
    //     }

    //     if (!NewProduto.categoria)
    //     {
    //         NewProduto.categoria = 'Sem categoria'
    //     }

    //     if (!NewProduto.estoqueUsado)
    //     {
    //         NewProduto.estoqueUsado = undefined
    //     }

    //     if (!NewProduto.dataCriacao)
    //     {
    //         NewProduto.dataCriacao = new Date(Date.now())
    //     }

    //     NewProduto.ultAtualizacao = new Date(Date.now())
    //     return this.produtoService.newProduct(novoProd);
    // }

    // @Patch('editar/:id')
    // @HttpCode(200)
    // alterProduct(@Param('id') id: number, 
    // @Body() ProdAlter: Partial<Produtos>): Produtos | undefined {
        
    //     return this.produtoService.updateProduct(id, ProdAlter)
    // }

    // @Delete('excluir/:id')
    // @HttpCode(200)
    // deleteProduct(@Param('id') id: number): Produtos[] {
    //     return this.produtoService.deleteProduct(id)
    // }

}