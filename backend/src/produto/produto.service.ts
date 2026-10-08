import { Injectable } from "@nestjs/common";

@Injectable()
export class ProdutoService {
    // recebe a interface
    // private readonly produtos: Produto[] = []

    // // busca todos os produtos e retorna como um array
    // allProducts(): Produtos[] {
    //     return produtos;
    // }

    // findProductId(prodId: number): Produtos | undefined {
    //     return produtos.find((produto) => produto.id === prodId)
    // }

    // // cria um novo produto no modelo da interface
    // newProduct(produto: Partial<Produto>): Produtos {
    //     const idProd = produtos[produtos.length-1].id + 1;
        
    //     const newProd: Produtos = {
    //         id: idProd,
    //         nomeProd: produto.nomeProd ?? "Sem nome",
    //         preco: produto.preco ?? 0.01,
    //         marca: produto.marca ?? "",
    //         marcaAlternativa: produto.marcaAlternativa ?? "",
    //         categoria: produto.categoria ?? "Sem categoria",
    //         estoqueAtual: produto.estoqueAtual ?? 0,
    //         estoqueUsado: produto.estoqueUsado ?? 0,
    //         dataCriacao: produto.dataCriacao ?? new Date(Date.now()),
    //         ultAtualizacao: produto.ultAtualizacao ?? new Date(Date.now())
    //     };

    //     produtos.push(newProd);
    //     return newProd;   
    // }

    // updateProduct(prodId: number, camposAlterar: Partial<Produtos>): Produtos | undefined {

    //     const produtoAlterar = produtos.find((produto) => produto.id === prodId);
    //     const produtoAtualizado = {
    //         id: prodId,
    //         nomeProd: camposAlterar.nomeProd ?? produtoAlterar?.nomeProd!,
    //         preco: camposAlterar.preco ?? produtoAlterar?.preco!,
    //         marca: camposAlterar.marca ?? produtoAlterar?.marca!,
    //         marcaAlternativa: camposAlterar.marcaAlternativa ?? produtoAlterar?.marcaAlternativa!,
    //         categoria: camposAlterar.categoria ?? produtoAlterar?.categoria!,
    //         estoqueAtual: camposAlterar.estoqueAtual ?? produtoAlterar?.estoqueAtual!,
    //         estoqueUsado: camposAlterar.estoqueUsado ?? produtoAlterar?.estoqueUsado!,
    //         ultAtualizacao: camposAlterar.ultAtualizacao ?? produtoAlterar?.ultAtualizacao!,
    //         dataCriacao: camposAlterar.dataCriacao ?? produtoAlterar?.dataCriacao!
    //     }

    //     produtos[prodId-1] = produtoAtualizado;

    //     return produtoAtualizado;
    // }

    // deleteProduct(prodId: number): Produtos[] {
    //     // const produtosDeletado = produtos.filter((produto) => produto.id !== prodId)
    //     const produtosDeletado = produtos.splice(prodId-1, 1);
    //     return produtosDeletado
    // }
}