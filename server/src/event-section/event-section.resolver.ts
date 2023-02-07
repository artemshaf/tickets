import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { EventSectionService } from './event-section.service';
import { CreateEventHoldingPlacementInput } from './inputs/create-event-holding-placement.input';
import { CreateEventHoldingInput } from './inputs/create-event-holding.input';
import {
  EventHolding,
  EventHoldingPlacement,
} from './models/event-section.model';

@Resolver(' EventSection')
export class EventSectionResolver {
  constructor(private readonly eventSectionService: EventSectionService) {}

  @Mutation(() => EventHolding)
  async createEventHolding(
    @Args('createEventHolding')
    eventPlacesHoldingInput: CreateEventHoldingInput,
  ) {
    return this.eventSectionService.createEventHolding(eventPlacesHoldingInput);
  }

  @Mutation(() => EventHoldingPlacement)
  async createEventHoldingPlacement(
    @Args('eventHoldingPlacement')
    eventHoldingPlacement: CreateEventHoldingPlacementInput,
  ) {
    return this.eventSectionService.createEventHoldingPlacement(
      eventHoldingPlacement,
    );
  }

  @Query(() => [EventHolding])
  async getAllEventHoldings() {
    return this.eventSectionService.getAllEventHoldings();
  }

  @Query(() => [EventHoldingPlacement])
  async getAllEventHoldingsPlacement() {
    return this.eventSectionService.getAllEventHoldingsPlacement();
  }

  @Query(() => EventHolding)
  async getEventHoldingByName(@Args('value') value: string) {
    return this.eventSectionService.getEventPlacesHoldingByValue(value);
  }

  @Query(() => EventHoldingPlacement)
  async getEventHoldingPlacement(
    @Args('getEventHoldingPlacement') eventHoldingPlacement: number,
  ) {
    return this.eventSectionService.getEventSectionsByPlacesHoldingId(
      eventHoldingPlacement,
    );
  }
}
