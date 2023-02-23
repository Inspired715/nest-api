import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from '../../services/auth/auth.service';
import { AuthModel } from '../../modules/auth/auth.interface';
import { StressAuthGuard } from '../../strategy/strategy-custom';
import { JwtAuthGuard } from '../../strategy/strategy-jwt';

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
    public getAllAuth(): Array<AuthModel> {
        return this.authService.getAllAuth();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    public getAuth(@Param('id', ParseIntPipe) uid: number): AuthModel {
        return this.authService.getAuth(uid);
    }

    @UseGuards(JwtAuthGuard)
    @Post('/create')
    public createAuth(@Body() auth: AuthModel): AuthModel {
        return this.authService.createAuth(auth);
    }

    @UseGuards(JwtAuthGuard)
    @Post('/update')
    public updateAuth(@Body() auth: AuthModel): AuthModel {
        return this.authService.updateAuth(auth);
    }
    
    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    public deleteAuth(@Param('id', ParseIntPipe) id: number): void {
        return this.authService.deleteAuth(id);
    }
}

