import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { EventPlacesHolding } from '../../event-section/models/event-section.model';
import { Genre } from '../../genre/models/genre.model';
import { Location } from '../../location/models/location.model';

@Table({ createdAt: false, updatedAt: false })
@ObjectType()
export class Event extends Model<Event> {
  @Field(() => ID)
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Field(() => Number)
  @ForeignKey(() => Genre)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  genreId: number;

  @BelongsTo(() => Genre)
  genre: Genre;

  @BelongsTo(() => Location)
  location: Location;

  @Field(() => Number)
  @ForeignKey(() => Location)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  locationId: number;

  @BelongsTo(() => EventPlacesHolding)
  place: EventPlacesHolding;

  @Field(() => Number)
  @ForeignKey(() => EventPlacesHolding)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  placeId: number;

  @Field(() => Date)
  @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue: new Date(new Date().setDate(new Date().getDate() + 7 * 3)),
  })
  date: Date;
}
