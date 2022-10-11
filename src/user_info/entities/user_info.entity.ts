import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BaseEntity } from 'typeorm';
import * as argon2 from 'argon2';

@Entity()
export class User_Info extends BaseEntity {
  @PrimaryGeneratedColumn({
    // user_id(기본 키)
    type: 'integer', // int, integer, varchar, char, date, datetime
  })
  user_id!: number;

  @Column({
    // name(닉네임)
    type: 'varchar',
    length: 15,
    nullable: false, // not null
  })
  name!: string;

  @Column({
    // birth(생년월일(YYYY-MM-DD))
    type: 'date',
    nullable: true, // null
  })
  birth!: string;

  @Column({
    // email(로그인 & 계정 복구에 필요한 Email)
    type: 'varchar',
    length: 50,
    nullable: false,
  })
  email!: string;

  @Column({
    // pw(비밀번호)
    type: 'varchar',
    length: 16,
    nullable: false,
  })
  pw!: string;

  @BeforeInsert()
  async hashPassword() {
    this.pw = await argon2.hash(this.pw);
  }

  @Column({
    // get_prot(받은 프로틴(데이터 0을 삽입해야함)
    type: 'int',
    nullable: false,
  })
  get_prot!: number;

  @Column({
    // follower(현재 나의 팔로워(데이터 0을 삽입해야함))
    type: 'int',
    nullable: false,
  })
  follower!: number;

  @Column({
    // following(현재 나의 팔로잉(데이터 0을 삽입해야함))
    type: 'int',
    nullable: false,
  })
  following!: number;

  @Column({
    // rating(등급)
    type: 'int',
    nullable: true,
  })
  rating!: number;

  @Column({
    // rank(순위)
    type: 'int',
    nullable: true,
  })
  rank!: number;

  @Column({
    // 작성한 공부법 개수를 카운트
    type: 'int',
    nullable: false,
  })
  studyBoardMethod_cnt!: number;
}
