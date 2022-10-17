import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNumber, IsOptional, Min} from 'class-validator';
import { toLowerCase } from '../../common/helper/cast.helper';

export class SearchQueryDto {

  @ApiProperty()
  @Transform(({ value }) => toLowerCase(value))
  @IsOptional()
  public query: string;

  @ApiProperty()
  @Transform(({ value }) => toLowerCase(value))
  @IsOptional()
  public pos: string;

  @ApiProperty()
  @Transform(({ value }) => toLowerCase(value))
  @IsOptional()
  public lang: string;

  @ApiProperty()
  @Transform(({ value }) => parseInt(value))
  @IsOptional()
  @IsNumber()
  @Min(1)
  public page: number = 1;

  @ApiProperty()
  @Transform(({ value }) => parseInt(value))
  @IsOptional()
  @IsNumber()
  @Min(1)
  public limit: number = 10;
}