import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNumber, IsPositive, IsString } from 'class-validator';

@InputType()
export class CreateTicketInput {
  @Field({ nullable: false })
  @IsPositive()
  userId: number;

  @Field({ nullable: false })
  @IsPositive()
  eventId: number;

  @Field({ nullable: false })
  @IsPositive()
  eventPlaceId: number;
}
