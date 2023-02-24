import { Module } from '@nestjs/common';
import { AuthService } from '../../services/auth/auth.service';
import { AuthController } from '../../controllers/auth/auth.controller';
import { Customstrategy } from '../../strategy/strategy';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../../strategy/jwt'
import { Auth } from '../../entities/auth/auth.entity';
import * as KEY from '../../strategy/constants.json';

@Module({
  imports:[
    PassportModule,
    JwtModule.register({
      secret: KEY.PRIMARY_KEY,
      signOptions: {expiresIn: '60s'}
    }),
    TypeOrmModule.forFeature([Auth]),
  ],
  providers: [AuthService, Customstrategy, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService]
})
export class AuthModule {}
