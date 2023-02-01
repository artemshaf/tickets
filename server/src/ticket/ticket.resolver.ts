import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateTicketInput } from './inputs/create-ticket.input';
import { Ticket } from './models/ticket.model';
import { TicketService } from './ticket.service';

@Resolver('Tickets')
export class TicketResolver {
  constructor(private readonly ticketService: TicketService) {}

  @Query(() => Ticket)
  async getTicketById(@Args('id') id: number) {
    return await this.ticketService.getTicketById(id);
  }

  @Query(() => Ticket)
  async getAllTickets() {
    return await this.ticketService.getAllTickets();
  }

  @Mutation(() => Ticket)
  async createTicket(
    @Args('createTicket') createTicketInput: CreateTicketInput,
  ) {
    return await this.ticketService.createTicket(createTicketInput);
  }

  @Mutation(() => Ticket)
  async deleteTicket(@Args('id') id: number) {
    return await this.ticketService.deleteTicket(id);
  }
}
