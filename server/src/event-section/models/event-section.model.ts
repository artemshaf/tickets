import { Field, ID, ObjectType } from '@nestjs/graphql';
import GraphQLJSON, { GraphQLJSONObject } from 'graphql-type-json';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';

export enum SeatStatusEnum {
  'free',
  'booked',
  'selected',
}

export interface IEventSeat {
  name: string;
  status: SeatStatusEnum;
}

@Table({
  indexes: [
    {
      fields: ['name', 'address'],
      unique: true,
    },
  ],
})
@ObjectType()
export class EventHolding extends Model<EventHolding> {
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
  address: string;
}

@Table({
  indexes: [{ fields: ['name', 'eventHoldingId'], unique: true }],
})
@ObjectType()
export class EventHoldingPlacement extends Model<EventHoldingPlacement> {
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

  @BelongsTo(() => EventHolding)
  eventHolding: EventHolding;

  @Field(() => Number)
  @ForeignKey(() => EventHolding)
  @Column({
    type: DataType.INTEGER,
  })
  eventHoldingId: number;

  @Field(() => GraphQLJSON)
  @Column({
    type: DataType.JSON,
    get() {
      return JSON.parse(this.getDataValue('places'));
    },
    // set(value) {
    //   return this.setDataValue('places', JSON.stringify(value as string));
    // },
  })
  places: JSON;
}
