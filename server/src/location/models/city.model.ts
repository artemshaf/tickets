import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Country } from './county.model';

@Table({
  createdAt: false,
  updatedAt: false,
  indexes: [
    {
      fields: ['city', 'countryId'],
      unique: true,
    },
  ],
})
@ObjectType({ description: 'City' })
export class City extends Model<City> {
  @Field(() => ID)
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Field()
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  city: string;

  @Field(() => Number)
  @ForeignKey(() => Country)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  countryId: number;

  @BelongsTo(() => Country)
  country: Country;
}
