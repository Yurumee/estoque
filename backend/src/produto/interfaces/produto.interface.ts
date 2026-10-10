export interface ProdutoInterface {
    id: number,
    nomeProd: string,
    preco: number,
    marcaPref?: string,
    marcaAlt?: string,
    categoria: string,
    estoqueAtual: number,
    estoqueUso?: number,
    dataCriacao: Date,
    ultAtualizacao: Date
}