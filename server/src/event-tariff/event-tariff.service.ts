import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateEventCategoryInput } from './inputs/create-event-category.input';
import { CreateEventClassInput } from './inputs/create-event-class.input';
import { CreateEventTariffInput } from './inputs/create-event-tariff.input';
import { GetEventTariffInput } from './inputs/get-event-tariff.input';
import { EventCategory } from './models/event-category.model';
import { EventClass } from './models/event-class.model';
import { EventTariff } from './models/event-tariff.model';

@Injectable()
export class EventTariffService {
  constructor(
    @InjectModel(EventCategory)
    private readonly eventCategoryRepository: typeof EventCategory,
    private readonly eventClassRepository: typeof EventClass,
    private readonly eventTariffRepository: typeof EventTariff,
  ) {}

  async createEventTariff(createEventTariff: CreateEventTariffInput) {
    return await this.eventTariffRepository.create(createEventTariff);
  }

  async createEventClass(createEventClassInput: CreateEventClassInput) {
    return await this.eventClassRepository.create(createEventClassInput);
  }

  async createEventCategory(
    createEventCategoryInput: CreateEventCategoryInput,
  ) {
    return await this.eventCategoryRepository.create(createEventCategoryInput);
  }

  async getEventTariff(getEventTariffInput: GetEventTariffInput) {
    return await this.eventTariffRepository.findOne({
      where: { ...getEventTariffInput },
    });
  }

  async getEventClass(value: string) {
    return await this.eventClassRepository.findOne({ where: { value } });
  }

  async getEventCategory(value: string) {
    return await this.eventCategoryRepository.findOne({ where: { value } });
  }
}
