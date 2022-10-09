import { CreateBoardDto } from './create-boards.dto';
import { PartialType } from '@nestjs/mapped-types';

// Data Transfer Object(DTO)
// 부분 타입(Partial Types) 사용 예
export class UpdateBoardDto extends PartialType(CreateBoardDto) {}
