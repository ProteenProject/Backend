import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/user_info-credentail.dto';
import { UserRepository } from './user_info.repository';

@Injectable()
export class UserInfoService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository
    ) {}

    async signUp(authCredentialsDto:AuthCredentialsDto):Promise<void>{
        return this.userRepository.createUser(authCredentialsDto)
    }
}
