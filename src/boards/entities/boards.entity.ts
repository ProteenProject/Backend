import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity()
export class Boards {
  @PrimaryGeneratedColumn({
    // postNum(게시글의 고유 번호(댓글을 삽입 시 필요, 고유 번호를 따라 댓글이 해당 게시글에 종속되어 보여짐))
    type: 'integer',
  })
  postId!: number;

  @Column({
    // title(게시글 제목)
    type: 'varchar',
    length: 30,
    nullable: false, // not null
  })
  title!: string;

  @Column({
    // contents(게시글 내용)
    type: 'text',
    nullable: false, // not null
  })
  contents!: string;

  @Column({
    // hits(조회수(데이터 0을 삽입해야함))
    type: 'int',
    nullable: false, // not null
  })
  hits!: number;

  @CreateDateColumn({
    type: 'datetime',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'datetime',
  })
  updatedAt: Date;
}
