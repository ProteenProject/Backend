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

  @Get()
  getAllBoard(): Promise<Boards[]> {
    return this.boardsService.getAllBoards();
  }

  @Post()
  createBoard(@Body() CreateBoardDto: CreateBoardDto): Promise<Boards> {
    return this.boardsService.createBoard(CreateBoardDto);
  }

  @Get(':id')
  getBoardById(@Param('id') postId: number): Promise<Boards> {
    return this.boardsService.getBoardById(postId);
  }

  @Delete(':id')
  deleteBoard(@Param('id', ParseIntPipe) postId): Promise<void> {
    return this.boardsService.deleteBoard(postId);
  }

  @Patch(':id/status') // Update
  updateBoardStatus(
    @Param('id') postId: number,
    @Body() updateData: UpdateBoardDto,
  ) {
    return this.boardsService.updateBoardStatus(postId, updateData);
  }
}
