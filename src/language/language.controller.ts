import { Controller, Get, NotFoundException, Param, Version } from '@nestjs/common';
import { LanguageService } from './language.service';
import { LanguageEntity } from './language.entity';

@Controller('language')
export class LanguageController {

    constructor(private readonly languageService: LanguageService) {}

    @Version('1')
    @Get()
    async findAll(): Promise<LanguageEntity[]> {
      return await this.languageService.findAll();
    }

    @Version('1')
    @Get(':code')
    async findOne(@Param('code') code:string) {

      const language = await this.languageService.findByCode(code);

      if(language === null){
        throw new NotFoundException('Language not found');
      }

      return language;
    }
    
}
