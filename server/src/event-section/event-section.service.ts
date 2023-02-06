import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateEventHoldingPlacementInput } from './inputs/create-event-holding-placement.input';
import { CreateEventHoldingInput } from './inputs/create-event-holding.input';
import {
  EventHolding,
  EventHoldingPlacement,
} from './models/event-section.model';

@Injectable()
export class EventSectionService {
  constructor(
    @InjectModel(EventHolding)
    private readonly eventHoldingRepo: typeof EventHolding,
    @InjectModel(EventHoldingPlacement)
    private readonly eventHoldingPlacementPRepo: typeof EventHoldingPlacement,
  ) {}

  createEventHolding(eventPlacesHoldingInput: CreateEventHoldingInput) {
    return this.eventHoldingRepo.create(eventPlacesHoldingInput);
  }

  createEventHoldingPlacement(
    eventHoldingPlacement: CreateEventHoldingPlacementInput,
  ) {
    return this.eventHoldingPlacementPRepo.create(eventHoldingPlacement);
  }

  // getEventPlacesHoldingByValue(value: string) {
  //   return this.eventPlacesHoldingRepo.findOne({ where: { value } });
  // }

  // getEventSectionsByPlacesHoldingId(id: number) {
  //   return this.eventSectionRepo.findAll({
  //     where: { eventPlacesHoldingId: id },
  //   });
  // }
}
