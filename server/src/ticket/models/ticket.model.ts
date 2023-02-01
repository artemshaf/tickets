import {
  Model,
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Event } from '../../event/models/event.model';
import { User } from '../../user/models/user.model';
import { EventPlace } from '../../event-section/models/event-place.model';

interface ITicketCreationAttributes {
  email: string;
  password: string;
}

@Table
@ObjectType()
export class Ticket extends Model<Ticket, ITicketCreationAttributes> {
  @Field(() => ID)
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Field(() => Number)
  @ForeignKey(() => Event)
  @Column({ type: DataType.INTEGER, allowNull: false })
  eventId: number;

  @BelongsTo(() => Event)
  event: Event;

  @Field(() => Number)
  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, allowNull: false })
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @BelongsTo(() => EventPlace)
  eventPlace: EventPlace;

  @Field(() => Number)
  @ForeignKey(() => EventPlace)
  @Column({ type: DataType.INTEGER, allowNull: false })
  eventPlaceId: EventPlace;
}
