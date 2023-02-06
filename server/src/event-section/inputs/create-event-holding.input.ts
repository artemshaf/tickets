import { Field, InputType } from '@nestjs/graphql';
import { IsJSON, IsNumber, IsObject, IsString } from 'class-validator';
import GraphQLJSON from 'graphql-type-json';

@InputType()
export class CreateEventHoldingInput {
  @Field(() => String)
  @IsString()
  name: string;

  @Field(() => Number)
  @IsNumber()
  locationId: number;
}
