import { Repository } from 'typeorm';
import { CustomRepository } from './boards.decorator';
import { Boards } from './entities/boards.entity';

// @CustomRepository(Boards) // 에러가 생긴 부분
export class BoardRepository extends Repository<Boards> {}
