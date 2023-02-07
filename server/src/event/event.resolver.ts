import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { EventService } from './event.service';
import { CreateEventInput } from './inputs/create-event.input';
import { Event } from './models/event.model';

@Resolver('Event')
export class EventResolver {
  constructor(private readonly eventService: EventService) {}

  @Mutation(() => Event)
  createEvent(@Args('createEvent') createEventInput: CreateEventInput) {
    return this.eventService.createEvent(createEventInput);
  }

  @Query(() => Event)
  getEvent(@Args('id') id: number) {
    return this.eventService.getEvent(id);
  }

  @Query(() => [Event])
  getAllEvents() {
    return this.eventService.getAllEvents();
  }
}
