import { Exclude } from "class-transformer";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TUsuario {
    @PrimaryGeneratedColumn()
    id: number;

    // login deve ser unico
    @Column({unique: true})
    login: string;

    // nao deve mostrar essa coluna quando retornado os dados via query builder e find()
    @Column({select: false})
    senha: string;
}