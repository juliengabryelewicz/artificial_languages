import { Injectable } from '@nestjs/common';
import { Like, QueryRunnerAlreadyReleasedError, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { WordEntity } from './word.entity';
import { SearchQueryDto } from './dto/dto.searchquery';

@Injectable()
export class WordService {
    constructor (
        @InjectRepository(WordEntity)
        private wordRepository: Repository<WordEntity>
    ){}

    async findByName(name:string): Promise<WordEntity>{
        return await this.wordRepository.findOne({
            where:{
                name: name
            },
            relations: {
                definitions : {
                    pos : true,
                    translation : true
                }
            }
        });
    }

    async findByNameAndLanguage(name:string, language:string): Promise<WordEntity>{
        return await this.wordRepository.findOne({
            where:{
                name: name,
                language: {
                    code: language
                }
            },
            relations: {
                definitions : {
                    pos : true,
                    translation : true
                }
            }
        });
    }

    async findRandom(): Promise<WordEntity>{
        return await this.wordRepository
            .createQueryBuilder('word')
            .innerJoinAndSelect("word.definitions", "definition")
            .innerJoinAndSelect("definition.pos", "pos")
            .innerJoinAndSelect("definition.translation", "translation")
            .select()
            .orderBy('RANDOM()')
            .getOne();
    }

    async findRandomByLanguage(language:string): Promise<WordEntity>{
        return await this.wordRepository
            .createQueryBuilder('word')
            .innerJoin("word.language", "language")
            .innerJoinAndSelect("word.definitions", "definition")
            .innerJoinAndSelect("definition.pos", "pos")
            .innerJoinAndSelect("definition.translation", "translation")
            .select()
            .where("language.code = :language", {language: language})
            .orderBy('RANDOM()')
            .getOne();
    }

    async searchWords(query:SearchQueryDto): Promise<WordEntity[]>{
        return await this.wordRepository.find({
            where:[
                { name: Like(`%${query.query}%`),
                    language: {
                        code: query.lang
                    },
                    definitions: {
                    pos: {
                        code: query.pos
                    },
                    translation: {
                        code: query.translation
                    }
                  }
                },
                { definitions:
                    {
                        description: Like(`%${query.query}%`),
                        pos: {
                            code: query.pos
                        },
                        translation: {
                            code: query.translation
                        }
                    },
                    language: {
                        code: query.lang
                    }
                },
            ],
            relations: {
                definitions : {
                    pos : true,
                    translation : true
                }
            },
            take: query.limit,
            skip: (query.page-1)*query.limit
        });
    }
}