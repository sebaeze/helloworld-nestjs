import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AddUserController } from './add-user/add-user.controller';

@Module({
  imports: [],
  controllers: [AppController, AddUserController],
  providers: [AppService],
})
export class AppModule {}
