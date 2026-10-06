export interface Produtos {
    id: number,
    nomeProd: string;
    preco: number;
    marca?: string;
    marcaAlternativa?: string;
    categoria: string;
    estoqueAtual: number;
    estoqueUsado?: number;
    dataCriacao: Date;
    ultAtualizacao: Date;
}

export const produtos: Produtos[] = [
    {
        "id": 1,
        "nomeProd": "Arroz Branco",
        "preco": 3.49,
        "marca": "São João",
        "marcaAlternativa": "",
        "categoria": "Alimentos",
        "estoqueAtual": 3,
        "estoqueUsado": 0,
        "ultAtualizacao": new Date(2026,10,5,17,15),
        "dataCriacao": new Date(2026,10,5,17,15)
    },
    {
        "id": 2,
        "nomeProd": "Feijão fava",
        "preco": 4.05,
        "marca": "carioca",
        "marcaAlternativa": "urbano",
        "categoria": "Alimentos",
        "estoqueAtual": 4,
        "estoqueUsado": 1,
        "ultAtualizacao": new Date(2026,10,5,17,22),
        "dataCriacao": new Date(2026,10,5,17,20)
    },
    {
        "id": 3,
        "nomeProd": "Agua sanitária",
        "preco": 8.90,
        "marca": "dragão",
        "marcaAlternativa": "",
        "categoria": "Limpeza",
        "estoqueAtual": 1,
        "estoqueUsado": 0,
        "ultAtualizacao": new Date(2026,10,5,17,30),
        "dataCriacao": new Date(2026,10,5,17,21)
    }
]