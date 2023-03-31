import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'products'})
export class Products extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({
        type:'char varying',
        name: ' product_title'
    })
    product_title: string

    @Column({
        type: 'integer',
        name: 'like'
    })
    like : number

    @CreateDateColumn()
    create_data : Date
}