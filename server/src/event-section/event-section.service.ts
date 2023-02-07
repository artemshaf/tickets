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
    private readonly eventHoldingPlacementRepo: typeof EventHoldingPlacement,
  ) {}

  createEventHolding(eventPlacesHoldingInput: CreateEventHoldingInput) {
    return this.eventHoldingRepo.create(eventPlacesHoldingInput);
  }

  createEventHoldingPlacement(
    eventHoldingPlacement: CreateEventHoldingPlacementInput,
  ) {
    return this.eventHoldingPlacementRepo.create(eventHoldingPlacement);
  }

  getEventPlacesHoldingByValue(value: string) {
    return this.eventHoldingRepo.findOne({ where: { value } });
  }

  async getAllEventHoldings() {
    const events = await this.eventHoldingRepo.findAll();
    return events;
  }

  async getAllEventHoldingsPlacement() {
    const placements = await this.eventHoldingPlacementRepo.findAll();
    return placements;
  }

  getEventSectionsByPlacesHoldingId(id: number) {
    return this.eventHoldingPlacementRepo.findOne({
      where: { eventHoldingId: id },
    });
  }
}
