import { Test, TestingModule } from '@nestjs/testing';
import { WordController } from './word.controller';
import { WordService } from './word.service';

describe('WordController', () => {
  let controller: WordController;
  let service: WordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WordController],
      providers: [
        {
          provide: WordService,
          useValue: {
            findByName: jest.fn().mockImplementation((name: string) =>
              Promise.resolve({
                name: name
              }),
            ),
            findByNameAndLanguage: jest.fn().mockImplementation((name: string, language: string) =>
              Promise.resolve({
                name: name,
                language : {
                  code : language
                }
              }),
            ),
          },
        },
      ],
    }).compile();

    controller = module.get<WordController>(WordController);
    service = module.get<WordService>(WordService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findByName', () => {
    it('should get a word', async () => {
      await expect(controller.findOne("a")).resolves.toEqual({ name: 'a'});
    });
  });
  describe('findByNameAndLanguage', () => {
    it('should get a language', async () => {
      await expect(controller.findOneByLanguage('a', 'tk')).resolves.toEqual({name: 'a', language : { code : 'tk'}});
    });
  });

});
