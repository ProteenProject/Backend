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
    // 모든 게시물을 가져오는 함수
    return this.boardRepository.find();
  }

  async createBoard(CreateBoardDto: CreateBoardDto): Promise<Boards> {
    // 게시물을 만드는 함수
    return this.boardRepository.createBoard(CreateBoardDto);
  }

  async getBoardById(postId: number): Promise<Boards> {
    // 게시물을 가져오는 함수
    const found = await this.boardRepository.findOne({ where: { postId } });

    if (!found) {
      throw new NotFoundException(`Can't find Board with id ${postId}`);
    }

    return found; // 가져온 게시물의 정보를 반환
  }

  async deleteBoard(postId: number): Promise<void> {
    // 게시물을 삭제하는 함수
    const result = await this.boardRepository.delete(postId);

    if (result.affected === 0) {
      throw new NotFoundException(`Can't find Board with id ${postId}`);
    }

    console.log('result', result);
  }

  async updateBoardStatus(
    // 게시물의 정보를 업데이트 해주는 함수
    postId: number,
    updateData: UpdateBoardDto,
  ): Promise<Boards> {
    const board = await this.getBoardById(postId);
    board.hits = updateData.hits;
    board.title = updateData.title;
    board.contents = updateData.contents;
    await this.boardRepository.save(board); // 변경된 사항을 DB에 저장

    return board; // 변경된 사항을 반환
  }

  async updateHits(postId: number): Promise<Boards> {
    // 게시물의 조회수를 증가하게 해주는 함수
    const board = await this.getBoardById(postId);
    board.hits++; // 조회수 증가
    await this.boardRepository.save(board); // 변경된 사항을 DB에 저장

    return board; // 변경된 사항을 반환
  }
}
