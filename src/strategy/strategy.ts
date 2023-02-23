import { Strategy } from 'passport-custom';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class Customstrategy extends PassportStrategy(Strategy, 'custom'){
    constructor(private authService: AuthService){
        super();
    }

    async validate(request: Request): Promise<any>{
        let req_body:any = request.body;
        let email : String = req_body.email?req_body.email:"";
        let password : String = req_body.password?req_body.password:"";

        if (!email || !password){
            throw new UnauthorizedException();
        };

        const user = await this.authService.validateUser(email, password);

        if( !user ){
            throw new UnauthorizedException();
        }
        
        return true;
    }
}