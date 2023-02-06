import { Field, ID, ObjectType } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Location } from '../../location/models/location.model';

export enum SeatStatusEnum {
  'free',
  'booked',
  'selected',
}

export interface IEventSeat {
  name: string;
  status: SeatStatusEnum;
}

@Table
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
    unique: true,
  })
  name: string;

  @BelongsTo(() => Location)
  location: Location;

  @Field(() => Number)
  @ForeignKey(() => Location)
  @Column({
    type: DataType.INTEGER,
  })
  locationId: number;
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
  })
  places: JSON;
}

// @Table({ createdAt: false, updatedAt: false })
// @ObjectType()
// export class EventPlacesHolding extends Model<EventPlacesHolding> {
//   @Field(() => ID)
//   @Column({
//     type: DataType.INTEGER,
//     unique: true,
//     autoIncrement: true,
//     primaryKey: true,
//   })
//   id: number;

//   @Field(() => String)
//   @Column({
//     type: DataType.STRING,
//   })
//   name: string;
// }

// @Table({ createdAt: false, updatedAt: false })
// @ObjectType()
// export class EventSection extends Model<EventSection> {
//   @Field(() => ID)
//   @Column({
//     type: DataType.INTEGER,
//     unique: true,
//     autoIncrement: true,
//     primaryKey: true,
//   })
//   id: number;

//   @Field(() => String)
//   @Column({
//     type: DataType.STRING,
//   })
//   name: string;

//   @BelongsTo(() => EventPlacesHolding)
//   EventPlacesHolding: EventPlacesHolding;

//   @Field(() => Number)
//   @ForeignKey(() => EventPlacesHolding)
//   @Column({
//     type: DataType.INTEGER,
//   })
//   eventPlacesHoldingId: number;
// }

// @Table({ createdAt: false, updatedAt: false })
// @ObjectType()
// export class EventSubSection extends Model<EventSubSection> {
//   @Field(() => ID)
//   @Column({
//     type: DataType.INTEGER,
//     unique: true,
//     autoIncrement: true,
//     primaryKey: true,
//   })
//   id: number;

//   @BelongsTo(() => EventSection)
//   eventSection: EventSection;

//   @Field(() => Number)
//   @ForeignKey(() => EventSection)
//   @Column({
//     type: DataType.INTEGER,
//   })
//   sectionId: number;

//   @Field(() => String)
//   @Column({
//     type: DataType.STRING,
//   })
//   name: string;

//   @Field(() => GraphQLJSON)
//   @Column({
//     type: DataType.JSON,
//   })
//   seatsByRows: JSON;
// }
