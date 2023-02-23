import { Strategy } from 'passport-custom';
import { AuthService } from '../services/auth/auth.service';
declare const Customstrategy_base: new (...args: any[]) => Strategy;
export declare class Customstrategy extends Customstrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(request: Request): Promise<any>;
}
export {};
