import { Repository } from 'typeorm';
import { CreateBoardDto } from './dto/create-boards.dto';
import { Boards } from './entities/boards.entity';
import { CustomRepository } from './TypeormForCustomRepository/CustomRepository.decorator';

@CustomRepository(Boards)
export class BoardRepository extends Repository<Boards> {
  async createBoard(CreateBoardDto: CreateBoardDto): Promise<Boards> {
    const { title, contents, hits } = CreateBoardDto;
    const board = this.create({
      title,
      contents,
      hits,
    });

    await this.save(board);
    return board;
  }
}
