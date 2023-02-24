import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Auth } from '../../entities/auth/auth.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {

    constructor(
        @InjectRepository(Auth)
        private readonly authRepository: Repository<Auth>,
        private jwtTokenService: JwtService
    ){}

    async getAllAuth(): Promise< Auth[]> {
        let sql = "select * from users";
        return await this.authRepository.query(sql);
    }

    async getAuth(id: number): Promise<Auth> {
        let sql = "select * from users where id=" + id;
        return await this.authRepository.query(sql);
    }

    async validateUser(email: String, password: String): Promise<any>{
        let sql = "select user_email from users where user_email='" + email + "'";
        const auth: any = this.authRepository.query(sql);

        if(auth)
            return true;
        else
            return false;
    }

    async loginByToken(user: any) {
        const payload = { email: user.email};

        return {
            access_token: this.jwtTokenService.sign(payload),
        };
    }
}


