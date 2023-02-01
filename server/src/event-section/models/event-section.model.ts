import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';

@Table({ createdAt: false, updatedAt: false })
@ObjectType()
export class EventPlacesHolding extends Model<EventPlacesHolding> {
  @Field(() => ID)
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Field(() => String)
  @Column({
    type: DataType.STRING,
  })
  name: string;
}

@Table({ createdAt: false, updatedAt: false })
@ObjectType()
export class EventSection extends Model<EventSection> {
  @Field(() => ID)
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Field(() => String)
  @Column({
    type: DataType.STRING,
  })
  name: string;

  @BelongsTo(() => EventPlacesHolding)
  EventPlacesHolding: EventPlacesHolding;

  @Field(() => Number)
  @ForeignKey(() => EventPlacesHolding)
  @Column({
    type: DataType.NUMBER,
  })
  EventPlacesHoldingId: number;
}

@Table({ createdAt: false, updatedAt: false })
@ObjectType()
export class EventSubSection extends Model<EventSubSection> {
  @Field(() => ID)
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Field(() => String)
  @Column({
    type: DataType.STRING,
  })
  name: string;

  @Field(() => String)
  @Column({
    type: DataType.STRING,
  })
  seatsByRows: {
    [key: number]: IEventSeat[];
  };
}

export enum SeatStatusEnum {
  'free',
  'booked',
  'selected',
}

export interface IEventSeat {
  name: string;
  status: SeatStatusEnum;
}
