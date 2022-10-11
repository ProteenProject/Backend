import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardRepository } from 'src/boards/board.repository';
import { TypeOrmForCustomRepositoryModule } from './TypeormForCustomRepository/typeormForCustomRepository.module';
import { UserInfoController } from './user_info.controller';
import { UserRepository } from './user_info.repository';
import { UserInfoService } from './user_info.service';

@Module({
  imports: [
    TypeOrmForCustomRepositoryModule.forCustomRepository([BoardRepository]),
    TypeOrmModule.forFeature([UserRepository])
  ],
  controllers: [UserInfoController],
  providers: [UserInfoService],
})
export class UserInfoModule {}
