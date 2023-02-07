import { Field, InputType } from '@nestjs/graphql';
import { IsJSON, IsNumber, IsString } from 'class-validator';
import GraphQLJSON from 'graphql-type-json';

@InputType()
export class CreateEventHoldingPlacementInput {
  @Field(() => String)
  @IsString()
  name: string;

  @Field(() => Number)
  @IsNumber()
  eventHoldingId: number;

  @Field(() => GraphQLJSON)
  @IsJSON()
  places: JSON;
}
