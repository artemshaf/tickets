import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from '../../user/models/user.model';
import { UserRole } from './user-role.model';

interface RoleCreationAttributes {
  value: string;
  description: string;
}

@Table({ createdAt: false, updatedAt: false })
@ObjectType()
export class Role extends Model<Role, RoleCreationAttributes> {
  @Field(() => ID)
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Field(() => String)
  @Column({ type: DataType.STRING, allowNull: false })
  value: string;

  @Field(() => String)
  @Column({ type: DataType.STRING, allowNull: false })
  description: string;

  @BelongsToMany(() => User, () => UserRole)
  users: User[];
}
