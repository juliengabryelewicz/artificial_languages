import { Test, TestingModule } from '@nestjs/testing';
import { LanguageController } from './language.controller';
import { LanguageService } from './language.service';

describe('LanguageController', () => {
  let controller: LanguageController;
  let service: LanguageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LanguageController],
      providers: [
        {
          provide: LanguageService,
          useValue: {
            findAll: jest.fn().mockResolvedValue([
              { code: 'tk', name: 'Toki Pona'},
              { code: 'srs', name: 'Solresol'},
              { code: 'lb', name: 'Lojban'},
            ]),
            findByCode: jest.fn().mockImplementation((code: string) =>
              Promise.resolve({
                code: code,
                name: 'Toki Pona'
              }),
            ),
          },
        },
      ],
    }).compile();

    controller = module.get<LanguageController>(LanguageController);
    service = module.get<LanguageService>(LanguageService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should get an array of languages', async () => {
      await expect(controller.findAll()).resolves.toEqual([
        { code: 'tk', name: 'Toki Pona'},
        { code: 'srs', name: 'Solresol'},
        { code: 'lb', name: 'Lojban'},
      ]);
    });
  });
  describe('findOne', () => {
    it('should get a language', async () => {
      await expect(controller.findOne('tk')).resolves.toEqual({ code: 'tk', name: 'Toki Pona'},);
    });
  });
});
