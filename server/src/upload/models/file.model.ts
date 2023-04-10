import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

export interface IFileCreationAttrbs {
  mimetype: string;
  originalname: string;
  buffer: Blob;
}

@ObjectType()
@Table
export class File
  extends Model<File, IFileCreationAttrbs>
  implements Pick<Express.Multer.File, 'mimetype' | 'originalname'>
{
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
  mimetype: string;

  @Field(() => Blob)
  @Column({
    type: DataType.BLOB,
  })
  buffer: Blob;

  @Field(() => String)
  @Column({
    type: DataType.STRING,
    unique: true,
  })
  originalname: string;
}
