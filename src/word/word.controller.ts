import { Controller, Get, HttpStatus, NotFoundException, Param, Query, Res, UsePipes, ValidationPipe, Version } from '@nestjs/common';
import { WordService } from './word.service';
import { WordEntity } from './word.entity';
import { SearchQueryDto } from './dto/dto.searchquery';

@Controller('word')
export class WordController {

    constructor(private readonly wordService: WordService) {}

    @Version('1')
    @Get('random')
    async findRandom(): Promise<WordEntity> {
      return await this.wordService.findRandom();
    }

    @Version('1')
    @Get('search')
    @UsePipes(new ValidationPipe({ transform: true }))
    async searchWords(@Query() query: SearchQueryDto) : Promise<WordEntity[]>  {
      return await this.wordService.searchWords(query);
    }

    @Version('1')
    @Get(':language/random')
    async findRandomByLanguage(@Param('language') language:string) : Promise<WordEntity> {

      const word = await this.wordService.findRandomByLanguage(language);

      if(word === null){
        throw new NotFoundException('Word not found');
      }

      return word;
    }

    @Version('1')
    @Get(':language/:name')
    async findOneByLanguage(@Param('name') name:string, @Param('language') language:string) {

      const word = await this.wordService.findByNameAndLanguage(name, language);

      if(word === null){
        throw new NotFoundException('Word not found');
      }

      return word;
    }

    @Version('1')
    @Get(':name')
    async findOne(@Param('name') name:string) {

      const word = await this.wordService.findByName(name);

      if(word === null){
        throw new NotFoundException('Word not found');
      }

      return word;
    }
    
}