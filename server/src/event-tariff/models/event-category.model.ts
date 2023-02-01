import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ createdAt: false, updatedAt: false })
@ObjectType()
export class EventCategory extends Model<EventCategory> {
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
  value: string;

  @Field(() => String)
  @Column({
    type: DataType.STRING,
    unique: true,
  })
  descrioption: string;
}
