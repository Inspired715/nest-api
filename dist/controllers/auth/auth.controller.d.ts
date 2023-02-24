import { AuthService } from '../../services/auth/auth.service';
import { Auth } from '../../entities/auth/auth.entity';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(req: any): Promise<{
        access_token: string;
    }>;
    getAllAuth(): Promise<Auth[]>;
    getAuth(uid: number): Promise<Auth>;
}
