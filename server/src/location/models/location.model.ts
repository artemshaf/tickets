import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { City } from './city.model';

@Table({ createdAt: false, updatedAt: false })
@ObjectType({ description: 'Location' })
export class Location extends Model<Location> {
  @Field(() => ID)
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Field(() => City)
  @ForeignKey(() => City)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  cityId: number;

  @BelongsTo(() => City)
  city: City;

  @Field(() => String)
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  area: string;
}
