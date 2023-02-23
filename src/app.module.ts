import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    AuthModule,
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: '',
    //   database: '',
    //   synchronize: true,
    //   autoLoadEntities: true,
    // }),
  ],
})
export class AppModule {}
