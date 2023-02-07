import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { LocationResolver } from './location.resolver';
import { City } from './models/city.model';
import { Country } from './models/county.model';
import { LocationService } from './location.service';

@Module({
  imports: [SequelizeModule.forFeature([City, Country])],
  providers: [LocationResolver, LocationService],
})
export class LocationModule {}
