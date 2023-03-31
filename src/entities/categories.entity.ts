import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity( {name: 'category'})
export class Category extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id : string

    @Column({
        type: 'char varying',
        name: 'title',
        length: 120,
        nullable:false
    })
    category_title: string
    
}