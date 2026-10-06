export interface Produto {
    nomeProd: string,
    preco: number,
    marca: string,
    marcaAlternativa: string,
    categoria: string,
    estoqueAtual: number,
    estoqueUsado: number,
    ultAtualizacao: Date,
    dataCriacao: Date
}