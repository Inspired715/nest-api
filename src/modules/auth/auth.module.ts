import { Module } from '@nestjs/common';
import { AuthService } from '../../services/auth/auth.service';
import { AuthController } from '../../controllers/auth/auth.controller';
import { Customstrategy } from '../../strategy/strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../../strategy/jwt'
import * as KEY from '../../strategy/constants.json';

@Module({
  imports:[
    PassportModule,
    JwtModule.register({
      secret: KEY.PRIMARY_KEY,
      signOptions: {expiresIn: '20s'}
    })
  ],
  providers: [AuthService, Customstrategy, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService]
})
export class AuthModule {}
