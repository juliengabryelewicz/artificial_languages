import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { LanguageModule } from './../src/language/language.module';
import { WordModule } from './../src/word/word.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule, LanguageModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/v1/language (GET)', () => {
    return request(app.getHttpServer())
      .get('/language')
      .expect(200);
  });

  it('/v1/language/tk (GET)', () => {
    return request(app.getHttpServer())
      .get('/language/tk')
      .expect(200);
  });

  it('/v1/language/unknown (GET)', () => {
    return request(app.getHttpServer())
      .get('/language/unknown')
      .expect(404);
  });

  it('/v1/word/random (GET)', () => {
    return request(app.getHttpServer())
      .get('/word/random')
      .expect(200);
  });

  it('/v1/word/tk/random (GET)', () => {
    return request(app.getHttpServer())
      .get('/word/tk/random')
      .expect(200);
  });

  it('/v1/word/unknown/random (GET)', () => {
    return request(app.getHttpServer())
      .get('/word/unknown/random')
      .expect(404);
  });

  it('/v1/word/:word (GET)', () => {
    return request(app.getHttpServer())
      .get('/word/ale')
      .expect(200);
  });

  it('/v1/word/unknown (GET)', () => {
    return request(app.getHttpServer())
      .get('/word/unknown')
      .expect(404);
  });

  it('/v1/word/language/word (GET)', () => {
    return request(app.getHttpServer())
      .get('/word/tk/akesi')
      .expect(200);
  });

  it('/v1/word/search (GET)', () => {
    return request(app.getHttpServer())
      .get('/word/search')
      .expect(200);
  });
});
