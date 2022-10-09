import { Module } from '@nestjs/common';
import { UserInfoController } from './user_info.controller';
import { UserInfoService } from './user_info.service';

@Module({
  controllers: [UserInfoController],
  providers: [UserInfoService],
})
export class UserInfoModule {}
