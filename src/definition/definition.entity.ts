import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { instanceToPlain, Exclude } from 'class-transformer';
import { WordEntity } from '../word/word.entity';
import { TranslationEntity } from '../translation/translation.entity';
import { PosEntity } from '../pos/pos.entity';

@Entity()
export class DefinitionEntity {
    @PrimaryGeneratedColumn()
    @Exclude()
    id: number;

    @ManyToOne(() => WordEntity, (word) => word.definitions)
    word: WordEntity

    @ManyToOne(() => TranslationEntity, (translation) => translation.definitions)
    translation: TranslationEntity

    @ManyToOne(() => PosEntity, (pos) => pos.definitions)
    pos: PosEntity

    @Column()
    description: string;

    toJSON() { return instanceToPlain(this); }

}