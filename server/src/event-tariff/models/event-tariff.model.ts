import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { EventCategory } from './event-category.model';
import { EventClass } from './event-class.model';

@Table({ createdAt: false, updatedAt: false })
@ObjectType()
export class EventTariff extends Model<EventTariff> {
  @Field(() => ID)
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @BelongsTo(() => EventCategory)
  category: EventCategory;

  @Field({
    description: 'id for event category',
  })
  @ForeignKey(() => EventCategory)
  @Column({
    type: DataType.INTEGER,
  })
  categoryId: number;

  @BelongsTo(() => EventClass)
  class: EventClass;

  @Field({
    description: 'id for event class',
  })
  @ForeignKey(() => EventClass)
  @Column({
    type: DataType.INTEGER,
  })
  classId: number;

  @Field(() => Number)
  @Column({
    type: DataType.INTEGER,
  })
  tariff: number;
}
