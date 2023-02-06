import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { EventSectionResolver } from './event-section.resolver';
import { EventSectionService } from './event-section.service';
import {
  EventHolding,
  EventHoldingPlacement,
} from './models/event-section.model';

@Module({
  imports: [SequelizeModule.forFeature([EventHolding, EventHoldingPlacement])],
  providers: [EventSectionResolver, EventSectionService],
})
export class EventSectionModule {}
