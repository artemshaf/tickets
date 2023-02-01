import { IsNumber, IsString } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class AddRoleUserInput {
  @Field()
  @IsString()
  readonly value: string;

  @Field()
  @IsNumber()
  readonly userId: number;
}
