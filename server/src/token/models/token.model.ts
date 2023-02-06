import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  Model,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Table,
} from 'sequelize-typescript';
import { User } from '../../user/models/user.model';

interface IRefreshTokenCreationAttributes {
  userId: number;
  refreshToken: string | null;
}

@Table
@ObjectType()
export class RefreshToken extends Model<
  RefreshToken,
  IRefreshTokenCreationAttributes
> {
  @Field(() => ID)
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Field(() => Number)
  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, allowNull: false, unique: true })
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @Field(() => String)
  @Column({ type: DataType.STRING, allowNull: true })
  refreshToken: string;
}
