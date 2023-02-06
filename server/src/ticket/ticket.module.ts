import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { EventHolding } from '../event-section/models/event-section.model';
import { EventModule } from '../event/event.module';
import { Event } from '../event/models/event.model';
import { User } from '../user/models/user.model';
import { UserModule } from '../user/user.module';
import { Ticket } from './models/ticket.model';
import { TicketResolver } from './ticket.resolver';
import { TicketService } from './ticket.service';

@Module({
  imports: [
    SequelizeModule.forFeature([Ticket, EventHolding, Event, User]),
    EventModule,
    UserModule,
  ],
  providers: [TicketResolver, TicketService],
})
export class TicketModule {}
