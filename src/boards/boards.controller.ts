import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CreateBoardDto } from './dto/create-boards.dto';
import { UpdateBoardDto } from './dto/update-boards.dto';
import { Boards } from './entities/boards.entity';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get()
  // 해당 경로(/)로 Get을 줄 경우 getAllBoard() 함수를 실행합니다.
  getAllBoard(): Promise<Boards[]> {
    // getAllBoards() 함수의 값을 반환합니다.
    return this.boardsService.getAllBoards();
  }

  @Post() // 해당 경로(/)로 Post를 줄 경우 createBoard(CreateBoardDto) 함수를 실행합니다.
  createBoard(@Body() CreateBoardDto: CreateBoardDto): Promise<Boards> {
    // createBoard() 함수의 값을 반환합니다.
    return this.boardsService.createBoard(CreateBoardDto);
  }

  @Get(':id') // 해당 경로로 Get을 줄 경우 getBoardById(postId) 함수를 실행합니다.
  getBoardById(@Param('id') postId: number): Promise<Boards> {
    // getBoardById() 함수의 값을 반환합니다.
    return this.boardsService.getBoardById(postId);
  }

  @Delete(':id') // 해당 경로로 Delete를 줄 경우 deleteBoard(postId) 함수를 실행합니다.
  deleteBoard(@Param('id', ParseIntPipe) postId): Promise<void> {
    return this.boardsService.deleteBoard(postId);
  }

  @Patch(':id/status') // 해당 경로로 Patch를 줄 경우 updateBoardStatus(postId, updateData) 함수를 실행합니다.
  updateBoardStatus(
    @Param('id') postId: number,
    @Body() updateData: UpdateBoardDto,
  ) {
    // updateBoardStatus() 함수의 값을 반환합니다.
    return this.boardsService.updateBoardStatus(postId, updateData);
  }

  @Patch(':id/hitsUpdate') // 해당 경로로 Patch를 줄 경우 updateHits(postId) 함수를 실행합니다.
  updateHits(@Param('id') postId: number) {
    // updateHits() 함수의 값을 반환합니다.
    return this.boardsService.updateHits(postId);
  }
}
