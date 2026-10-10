import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TProduto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nomeProd: string;

    @Column()
    preco: number;

    @Column()
    marcaPref: string;

    @Column()
    marcaAlt: string;

    @Column()
    categoria: string;

    @Column()
    estoqueAtual: string;

    @Column()
    estoqueUso: string;

    @Column()
    dataCriacao: Date;

    @Column()
    ultAtualizacao: Date;
}