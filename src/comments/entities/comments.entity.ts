import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Comments {
  @PrimaryGeneratedColumn({
    // postNum(게시글의 고유 번호(댓글을 삽입 시 필요, 고유 번호를 따라 댓글이 해당 게시글에 종속되어 보여짐))
    type: 'integer',
  })
  postNum!: number;

  @Column({
    // indexComments
    type: 'int',
    nullable: false, // not null
  })
  indexComments!: number;

  @Column({
    // comment
    type: 'varchar',
    length: '255',
    nullable: false, // not null
  })
  comment!: string;

  @Column({
    // class
    type: 'int',
    nullable: false, // not null
  })
  class!: number;

  @Column({
    // order
    type: 'int',
    nullable: false, // not null
  })
  order!: number;

  @Column({
    // groupNum
    type: 'int',
    nullable: false, // not null
  })
  groupNum!: number;
}
