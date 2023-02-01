import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { EventPlacesHolding } from '../event-section/models/event-section.model';
import { Genre } from '../genre/models/genre.model';
import { Location } from '../location/models/location.model';
import { EventResolver } from './event.resolver';
import { EventService } from './event.service';
import { Event } from './models/event.model';

@Module({
  imports: [
    SequelizeModule.forFeature([Event, Location, Genre, EventPlacesHolding]),
  ],
  providers: [EventResolver, EventService],
})
export class EventModule {}
