import { Role } from '../../role/models/role.model';
import { UserRole } from '../../role/models/user-role.model';
import { Model, Column, Table, DataType, HasMany } from 'sequelize-typescript';
import { Field, ID, ObjectType } from '@nestjs/graphql';

interface IUserCreationAttributes {
  email: string;
  password: string;
}

@Table({})
@ObjectType()
export class User extends Model<User, IUserCreationAttributes> {
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
  email: string;

  @Field(() => String)
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @HasMany(() => UserRole, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    hooks: true,
  })
  roles: Role[];
}
