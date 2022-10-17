import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { instanceToPlain, Exclude } from 'class-transformer';
import { DefinitionEntity } from '../definition/definition.entity';
import { IsNotEmpty } from "class-validator";

@Entity()
export class TranslationEntity {
    @PrimaryGeneratedColumn()
    @Exclude()
    id: number;

    @Column()
    @IsNotEmpty()
    code: string;

    @OneToMany(() => DefinitionEntity, (definition) => definition.translation)
    definitions: DefinitionEntity[]

    toJSON() { return instanceToPlain(this); }
}