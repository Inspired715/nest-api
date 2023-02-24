import { JwtService } from '@nestjs/jwt';
import { Auth } from '../../entities/auth/auth.entity';
import { Repository } from 'typeorm';
export declare class AuthService {
    private readonly authRepository;
    private jwtTokenService;
    constructor(authRepository: Repository<Auth>, jwtTokenService: JwtService);
    getAllAuth(): Promise<Auth[]>;
    getAuth(id: number): Promise<Auth>;
    validateUser(email: String, password: String): Promise<any>;
    loginByToken(user: any): Promise<{
        access_token: string;
    }>;
}
