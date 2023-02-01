import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTicketInput } from './inputs/create-ticket.input';
import { Ticket } from './models/ticket.model';

@Injectable()
export class TicketService {
  constructor(
    @InjectModel(Ticket) private readonly ticketRepository: typeof Ticket,
  ) {}

  getTicketById(id: number) {
    return this.ticketRepository.findByPk(id);
  }

  getAllTickets() {
    return this.ticketRepository.findAll();
  }

  createTicket(createTicketInput: CreateTicketInput) {
    return this.ticketRepository.create(createTicketInput);
  }

  deleteTicket(id: number) {
    return this.ticketRepository.destroy({ where: { id } });
  }
}
