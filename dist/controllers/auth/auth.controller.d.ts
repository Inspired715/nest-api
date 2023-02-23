import { AuthService } from '../../services/auth/auth.service';
import { AuthModel } from '../../modules/auth/auth.interface';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(req: any): Promise<{
        access_token: string;
    }>;
    getAllAuth(): Array<AuthModel>;
    getAuth(uid: number): AuthModel;
    createAuth(auth: AuthModel): AuthModel;
    updateAuth(auth: AuthModel): AuthModel;
    deleteAuth(id: number): void;
}
