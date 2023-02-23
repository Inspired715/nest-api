import { AuthModel } from '../../modules/auth/auth.interface';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private jwtTokenService;
    private authList;
    constructor(jwtTokenService: JwtService);
    getAllAuth(): Array<AuthModel>;
    getAuth(id: number): AuthModel;
    createAuth(auth: AuthModel): AuthModel;
    updateAuth(auth: AuthModel): AuthModel;
    deleteAuth(id: number): void;
    validateUser(email: String, password: String): Promise<any>;
    loginByToken(user: any): Promise<{
        access_token: string;
    }>;
}
