import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateEventInput } from './inputs/create-event.input';
import { Event } from './models/event.model';

@Injectable()
export class EventService {
  constructor(@InjectModel(Event) private readonly eventRepo: typeof Event) {}

  // async createEvent({ image, ...rest }: CreateEventInput) {
  //   const { createReadStream, filename } = await image;
  //   console.log(await image);
  //   const event = await this.eventRepo.create(rest);
  //   return event;
  // }

  async getEvent(id: number) {
    const event = await this.eventRepo.findByPk(id);
    return event;
  }

  async getAllEvents() {
    const events = await this.eventRepo.findAll();
    return events;
  }
}
