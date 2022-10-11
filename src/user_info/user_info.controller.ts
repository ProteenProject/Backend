import { Body, Controller, Post } from '@nestjs/common';
import { AuthCredentialsDto } from './dto/user_info-credentail.dto';
import { UserInfoService } from './user_info.service';

@Controller('user-info')
export class UserInfoController {
    constructor(private authService: UserInfoService){}
    @Post('/signup')
    signUp(@Body()AuthCredentialsDto: AuthCredentialsDto): Promise<void>{
        return this.authService.signUp(AuthCredentialsDto);
    }
}
