import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { EventSectionResolver } from './event-section.resolver';
import { EventSectionService } from './event-section.service';
import { EventPlace } from './models/event-place.model';
import {
  EventSection,
  EventSubSection,
  EventPlacesHolding,
} from './models/event-section.model';

@Module({
  imports: [
    SequelizeModule.forFeature([
      EventPlacesHolding,
      EventSection,
      EventSubSection,
      EventPlace,
    ]),
  ],
  providers: [EventSectionResolver, EventSectionService],
})
export class EventSectionModule {}
