import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { instanceToPlain, Exclude } from 'class-transformer';
import { DefinitionEntity } from '../definition/definition.entity';
import { LanguageEntity } from '../language/language.entity';
import { IsNotEmpty } from "class-validator";

@Entity()
export class WordEntity {
    @PrimaryGeneratedColumn()
    @Exclude()
    id: number;

    @Column()
    @IsNotEmpty()
    name: string;

    @ManyToOne(() => LanguageEntity, (language) => language.words)
    language: LanguageEntity

    @OneToMany(() => DefinitionEntity, (definition) => definition.word)
    definitions: DefinitionEntity[]

    toJSON() { return instanceToPlain(this); }

}