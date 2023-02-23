import { Injectable, NotFoundException } from '@nestjs/common';
import { AuthModel } from '../../modules/auth/auth.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    private authList: Array<AuthModel> = [
        {
            id: 1,
            date: new Date(),
            user_name: 'ghost1',
            token:'ff',
            user_email: 'ghost1@gmail.com'
        },
        {
            id: 2,
            date: new Date(),
            user_name: 'ghost2',
            token:'',
            user_email: 'ghost2@gmail.com'
        },
        {
            id: 3,
            date: new Date(),
            user_name: 'ghost3',
            token:'',
            user_email: 'ghost3@gmail.com'
        },
        {
            id: 4,
            date: new Date(),
            user_name: 'ghost4',
            token:'',
            user_email: 'ghost4@gmail.com'
        },
        {
            id: 5,
            date: new Date(),
            user_name: 'ghost5',
            token:'',
            user_email: 'ghost5@gmail.com'
        }
    ];

    constructor(private jwtTokenService: JwtService){}

    public getAllAuth(): Array<AuthModel> {
        return this.authList;
    }

    public getAuth(id: number): AuthModel {
        const auth: AuthModel = this.authList.find(auths => auths.id === id);

        if (!auth) {
          throw new NotFoundException('Not existed. Please registe first');
        }
      
        return auth;
    }

    public createAuth(auth : AuthModel) : AuthModel{
        this.authList.push(auth);
        return auth;
    }

    public updateAuth(auth : AuthModel) : AuthModel{
        this.authList[auth.id] = auth;
        return auth;
    }

    public deleteAuth(id: number): void {
        const index: number = this.authList.findIndex(item => item.id === id);
      
        if (index === -1) {
          throw new NotFoundException('Auth not found.');      
        }
      
        this.authList.splice(index, 1);
    }

    async validateUser(email: String, password: String): Promise<any>{

        const auth: AuthModel = this.authList.find(auths => auths.user_email === email);

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


