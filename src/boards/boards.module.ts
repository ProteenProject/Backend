import { Module } from '@nestjs/common';
import { BoardRepository } from './board.repository';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';
import { TypeOrmForCustomRepositoryModule } from './TypeormForCustomRepository/typeormForCustomRepository.module';

@Module({
  imports: [
    TypeOrmForCustomRepositoryModule.forCustomRepository([BoardRepository]),
  ],
  controllers: [BoardsController],
  providers: [BoardsService],
})
export class BoardsModule {}
