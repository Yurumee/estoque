import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { TProduto } from "../../produto/entities/produto.entity";

@Entity()
export class TEstoque {
    @PrimaryGeneratedColumn()
    id: number;

    // @Column()
    // item: string;

    // @Column()
    // preco: number;

    // @Column()
    // marcaPref?: string;

    // @Column()
    // marcaAlt?: string;

    // @Column()
    // categoria: string;

    @Column()
    estoqueAtual: number;

    @Column()
    estoqueUso?: number;

    @Column()
    dataCriacao: Date;

    @Column()
    ultAtualizacao: Date;

    // relacionamento muitos pra um (muitos produtos para um estoque)
    @OneToMany(() => TProduto, (produto) => produto.estoque)
    produto: TProduto[]
}