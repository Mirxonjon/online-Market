import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'like'})
export class Like extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id : string

    @Column({
        type: 'char varying',
        name: 'user'
    })
    user: string
}