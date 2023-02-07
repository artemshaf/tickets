import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateEventInput } from './inputs/create-event.input';
import { Event } from './models/event.model';

@Injectable()
export class EventService {
  constructor(@InjectModel(Event) private readonly eventRepo: typeof Event) {}

  async createEvent(createEventInput: CreateEventInput) {
    const event = await this.eventRepo.create(createEventInput);
    return event;
  }

  async getEvent(id: number) {
    const event = await this.eventRepo.findByPk(id);
    return event;
  }

  async getAllEvents() {
    const events = await this.eventRepo.findAll();
    return events;
  }
}
