import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ createdAt: false, updatedAt: false })
@ObjectType({ description: 'Country' })
export class Country extends Model<Country> {
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
  country: string;
}
