import { Entity, Column, PrimaryColumn } from 'typeorm';

// 외래키로 유저 id를 받아와야 합니다.

@Entity()
export class Records {
  @PrimaryColumn()
  record_id: number;

  @Column({
    // todo(이주의 계획)
    type: 'varchar',
    length: 30,
    nullable: true, // null
  })
  todo!: string;

  @Column({
    // video_record(내가 본 공부법 기록)
    type: 'varchar',
    length: 50,
    nullable: true, // null
  })
  video_record!: string;
}
