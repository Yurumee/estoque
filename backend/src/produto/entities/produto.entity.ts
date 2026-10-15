import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { TEstoque } from "../../estoque/entities/estoque.entity";
import { TUsuario } from "../../auth/entities/user.entity";

@Entity()
export class TProduto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nomeProd: string;

    @Column()
    preco: number;

    @Column()
    marcaPref?: string;

    @Column()
    marcaAlt?: string;

    @Column()
    categoria: string;

    // @Column()
    // estoqueAtual: number;

    // @Column()
    // estoqueUso?: number;

    @Column()
    dataCriacao: Date;

    @Column()
    ultAtualizacao: Date;

    // relacionamento muitos pra um (muitos produtos para um estoque)
    @ManyToOne(() => TEstoque, (estoque) => estoque.produto)
    estoque: TEstoque

    // relacionamento many to many (muitos usuarios adicionam muitos produtos)
    @ManyToMany(() => TUsuario)
    @JoinTable()
    usuarios: TUsuario[]
}