import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { EventTariffService } from './event-tariff.service';
import { CreateEventCategoryInput } from './inputs/create-event-category.input';
import { CreateEventClassInput } from './inputs/create-event-class.input';
import { CreateEventTariffInput } from './inputs/create-event-tariff.input';
import { GetEventTariffInput } from './inputs/get-event-tariff.input';
import { EventCategory } from './models/event-category.model';
import { EventClass } from './models/event-class.model';
import { EventTariff } from './models/event-tariff.model';

@Resolver()
export class EventTariffResolver {
  constructor(private readonly eventTariffService: EventTariffService) {}

  @Mutation(() => EventTariff)
  async createEventTariff(
    @Args('createEventTariff') createEventTariff: CreateEventTariffInput,
  ) {
    return await this.eventTariffService.createEventTariff(createEventTariff);
  }

  @Mutation(() => EventClass)
  async createEventClass(
    @Args('createEvent') createEventClassInput: CreateEventClassInput,
  ) {
    return await this.eventTariffService.createEventClass(
      createEventClassInput,
    );
  }

  @Mutation(() => EventCategory)
  async createEventCategory(
    @Args('createEventCategory')
    createEventCategoryInput: CreateEventCategoryInput,
  ) {
    return await this.eventTariffService.createEventCategory(
      createEventCategoryInput,
    );
  }

  @Query(() => EventTariff)
  async getEventTariff(
    @Args('getEventTariff') getEventTariffInput: GetEventTariffInput,
  ) {
    return await this.eventTariffService.getEventTariff(getEventTariffInput);
  }

  @Query(() => EventClass)
  async getEventClass(@Args('value') value: string) {
    return await this.eventTariffService.getEventClass(value);
  }

  @Query(() => EventCategory)
  async getEventCategory(@Args('value') value: string) {
    return await this.eventTariffService.getEventCategory(value);
  }
}
