import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class TUsuario {
    @PrimaryGeneratedColumn()
    id: number;

    // login deve ser unico
    @Column({unique: true})
    login: string;

    // email deve ser unico
    // @Column({unique: true})
    // email: string;

    // nao deve mostrar essa coluna quando retornado os dados via query builder e find()
    @Column()
    senha: string;

    // email foi validado
    // @Column()
    // emailVerificado: boolean
}