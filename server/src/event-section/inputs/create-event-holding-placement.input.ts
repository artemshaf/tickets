import { Field, InputType } from '@nestjs/graphql';
import { IsJSON, IsObject, IsString } from 'class-validator';
import GraphQLJSON from 'graphql-type-json';

@InputType()
export class CreateEventHoldingPlacementInput {
  @Field(() => String)
  @IsString()
  name: string;

  @Field(() => Number)
  @IsString()
  eventHoldingId: number;

  @Field(() => GraphQLJSON)
  @IsObject()
  places: JSON;
}
