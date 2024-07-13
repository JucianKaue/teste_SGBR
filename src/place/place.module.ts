import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePlaceController } from './controllers/create-place.controller';
import { EditPlaceController } from './controllers/edit-place.controller';
import { DeletePlaceController } from './controllers/delete-place.controller';
import { GetPlaceController } from './controllers/get-place.controller';
import { GetAllPlacesController } from './controllers/get-all-places.controller';

@Module({
  controllers: [
    CreatePlaceController,
    EditPlaceController,
    DeletePlaceController,
    GetPlaceController,
    GetAllPlacesController
  ],
  providers: [PrismaService]
})
export class PlaceModule {}