import { Controller, Get, Param, ParseIntPipe, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from '../../services/auth/auth.service';
import { StressAuthGuard } from '../../strategy/strategy-custom';
import { JwtAuthGuard } from '../../strategy/strategy-jwt';
import { Auth } from '../../entities/auth/auth.entity';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}
    
    @UseGuards(StressAuthGuard)
    @Post('login')
    async login(@Request() req) {
        return this.authService.loginByToken(req);
    }
    
    @UseGuards(JwtAuthGuard)
    @Get()
    public getAllAuth(): Promise<Auth[]>  {
        return this.authService.getAllAuth();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    public getAuth(@Param('id', ParseIntPipe) uid: number): Promise<Auth> {
        return this.authService.getAuth(uid);
    }
}

