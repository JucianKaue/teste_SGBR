import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { PlaceController } from './place/place.controller';

@Module({
  imports: [],
  controllers: [AppController, UserController, PlaceController],
  providers: [AppService],
})
export class AppModule {}
