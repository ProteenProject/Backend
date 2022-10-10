import { Injectable, NotFoundException } from '@nestjs/common';
import { Boards } from './entities/boards.entity';
import { CreateBoardDto } from './dto/create-boards.dto';
import { UpdateBoardDto } from './dto/update-boards.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardRepository } from './board.repository';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(BoardRepository)
    private boardRepository: BoardRepository,
  ) {}

  async getAllBoards(): Promise<Boards[]> {
    return this.boardRepository.find();
  }

  async createBoard(CreateBoardDto: CreateBoardDto): Promise<Boards> {
    return this.boardRepository.createBoard(CreateBoardDto);
  }

  async getBoardById(postId: number): Promise<Boards> {
    const found = await this.boardRepository.findOne({ where: { postId } });

    if (!found) {
      throw new NotFoundException(`Can't find Board with id ${postId}`);
    }

    return found;
  }

  async deleteBoard(postId: number): Promise<void> {
    const result = await this.boardRepository.delete(postId);

    if (result.affected === 0) {
      throw new NotFoundException(`Can't find Board with id ${postId}`);
    }

    console.log('result', result);
  }

  async updateBoardStatus(
    postId: number,
    updateData: UpdateBoardDto,
  ): Promise<Boards> {
    const board = await this.getBoardById(postId);
    board.hits = updateData.hits;
    board.title = updateData.title;
    board.contents = updateData.contents;
    board.postDate = updateData.postDate;
    await this.boardRepository.save(board);

    return board;
  }
}
