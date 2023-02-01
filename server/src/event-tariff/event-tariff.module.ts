import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { EventCategory } from './models/event-category.model';
import { EventClass } from './models/event-class.model';
import { EventTariff } from './models/event-tariff.model';

@Module({
  imports: [
    SequelizeModule.forFeature([EventTariff, EventClass, EventCategory]),
  ],
})
export class EventTariffModule {}
