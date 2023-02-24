import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auth } from './entities/auth/auth.entity';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '192.168.203.130',
      port: 5432,
      username: 'postgres',
      password: 'myPassword',
      database: 'postgres',
      schema: 'public',    
      entities: [Auth],
      synchronize: true
    }),
    AuthModule
  ],
})
export class AppModule {}