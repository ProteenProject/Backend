import { IsNumber, IsString } from 'class-validator';

export class CreateBoardDto {
  @IsString()
  readonly title: string;
  @IsString()
  readonly contents: string;
  @IsString()
  readonly postDate: string;
  @IsNumber()
  readonly hits: number;
}
