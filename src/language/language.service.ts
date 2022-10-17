import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { LanguageEntity } from './language.entity';

@Injectable()
export class LanguageService {
    constructor (
        @InjectRepository(LanguageEntity)
        private languageRepository: Repository<LanguageEntity>
    ){}

    async findAll(): Promise<LanguageEntity[]>{
        return await this.languageRepository.find();
    }

    async findByCode(code:string): Promise<LanguageEntity>{
        return await this.languageRepository.findOne({
            where:{
                code: code
            }
        });
    }
}