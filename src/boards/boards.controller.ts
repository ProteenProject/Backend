import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-boards.dto';
import { UpdateBoardDto } from './dto/update-boards.dto';
import { Boards } from './entities/boards.entity';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}
  // @Get()
  // getAll(): Boards[] {
  //   return this.boardsService.getAll();
  // }
  // // @Get('search')
  // // search(@Query('year') searchingYear: string) {
  // //   return `We are searching for a movie with a title: ${searchingYear}`;
  // // }
  // @Get(':id') // Get 형식으로 데이터를 전송합니다.
  // getBoardById(@Param('id') postId: string): Boards {
  //   return this.boardsService.getBoardById(postId);
  // }
  @Post()
  createBoard(@Body() CreateBoardDto: CreateBoardDto): Promise<Boards> {
    return this.boardsService.createBoard(CreateBoardDto);
  }

  @Get(':id')
  getBoardById(@Param('id') postId: number): Promise<Boards> {
    return this.boardsService.getBoardById(postId);
  }
  // @Post() // Post 형식으로 데이터를 전송합니다.
  // create(@Body() boardData: CreateBoardDto) {
  //   return this.boardsService.create(boardData); // 데이터를 생성하는 함수 create();
  // }
  // @Delete(':id') // Delete
  // remove(@Param('id') postId: string) {
  //   return this.boardsService.deleteOne(postId);
  // }
  // @Patch(':id/status') // Update
  // path(@Param('id') postId: string, @Body() updateData: UpdateBoardDto) {
  //   return this.boardsService.update(postId, updateData);
  // }
}
