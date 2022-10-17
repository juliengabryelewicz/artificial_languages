import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { instanceToPlain, Exclude } from 'class-transformer';
import { DefinitionEntity } from '../definition/definition.entity';
import { IsNotEmpty } from "class-validator";

@Entity()
export class PosEntity {
    @PrimaryGeneratedColumn()
    @Exclude()
    id: number;

    @Column()
    @IsNotEmpty()
    code: string;

    @OneToMany(() => DefinitionEntity, (definition) => definition.pos)
    definitions: DefinitionEntity[]

    toJSON() { return instanceToPlain(this); }
}