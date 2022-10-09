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
  // getAll(): Boards[] {
  //   return this.board;
  // }
  // getOne(postId: string): Boards {
  //   // eslint-disable-next-line prettier/prettier
  //   const board = this.board.find((board) => board.postId === postId);
  //   if (!board) {
  //     // 에러 출력
  //     throw new NotFoundException(`Board with ID: ${postId} not found.`);
  //   }
  //   return board;
  // }
  // getBoardById(id: string): Boards {
  //   return this.board.find((board) => board.postId === id);
  // }
  async createBoard(CreateBoardDto: CreateBoardDto): Promise<Boards> {
    const { title, contents, postDate, hits } = CreateBoardDto;
    const board = this.boardRepository.create({
      title,
      contents,
      postDate,
      hits,
    });

    await this.boardRepository.save(board);
    return board;
  }

  async getBoardById(postId: number): Promise<Boards> {
    const found = await this.boardRepository.findOne({ where: { postId } });

    if (!found) {
      throw new NotFoundException(`Can't find Board with id ${postId}`);
    }

    return found;
  }
  // deleteOne(postId: string) {
  //   this.getOne(postId); // 검사를 진행합니다.
  //   // eslint-disable-next-line prettier/prettier
  //   this.board = this.board.filter((board) => board.postId !== postId);
  //   return true;
  // }
  // create(BoardData: CreateBoardDto) {
  //   this.board.push({
  //     postId: uuid(),
  //     ...BoardData,
  //   });
  // }
  // update(postId: string, updateData: UpdateBoardDto) {
  //   const board = this.getBoardById(postId);
  //   board.hits = updateData.hits;
  //   board.title = updateData.title;
  //   board.contents = updateData.contents;
  //   board.postDate = updateData.postDate;
  //   return board;
  // }
}
