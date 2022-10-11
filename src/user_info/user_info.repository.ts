import { Repository } from "typeorm";
import { AuthCredentialsDto } from "./dto/user_info-credentail.dto";
import { User_Info } from "./entities/user_info.entity";
import { CustomRepository } from "./TypeormForCustomRepository/CustomRepository.decorator";

@CustomRepository(User_Info)
export class UserRepository extends Repository<User_Info>{
    async createUser(authCredentialsDto:AuthCredentialsDto): Promise<void>{
        const{name,pw}=authCredentialsDto;
        const user_info=this.create({name,pw});
        await this.save(user_info)
    }
}