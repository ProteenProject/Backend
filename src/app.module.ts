import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardsModule } from './boards/boards.module';
import { User_Info } from './user_info/entities/user_info.entity';
import { UserInfoModule } from './user_info/user_info.module';
import { CommentsModule } from './comments/comments.module';
import { RecordsModule } from './records/records.module';
import { Comments } from './comments/entities/comments.entity';
import { Boards } from './boards/entities/boards.entity';
import { Records } from './records/entities/records.entity';

@Module({
  imports: [
    BoardsModule,
    ConfigModule.forRoot({
      envFilePath: ['.development.env'],
    }),
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_DATABASE,
      entities: [User_Info, Comments, Boards, Records],
      synchronize: true,
    }),
    UserInfoModule,
    CommentsModule,
    RecordsModule,
    BoardsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
