import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { instanceToPlain, Exclude } from 'class-transformer';
import { WordEntity } from '../word/word.entity';
import { IsNotEmpty } from "class-validator";

@Entity()
export class LanguageEntity {
    @PrimaryGeneratedColumn()
    @Exclude()
    id: number;

    @Column()
    @IsNotEmpty()
    code: string;

    @Column()
    @IsNotEmpty()
    name: string;

    @OneToMany(() => WordEntity, (word) => word.language)
    words: WordEntity[]

    toJSON() { return instanceToPlain(this); }
}