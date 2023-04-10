import { InputType, Field } from '@nestjs/graphql';
import { IsOptional, MaxDate, MinDate } from 'class-validator';
@InputType()
export class CreateEventInput {
  @Field(() => Number)
  genreId: number;

  @Field(() => Number)
  locationId: number;

  @Field(() => Number)
  placeId: number;

  @Field(() => Date)
  @MinDate(new Date(new Date().setDate(new Date().getDate() + 7)))
  @MaxDate(new Date(new Date().setMonth(new Date().getMonth() + 6)))
  @IsOptional()
  date?: Date;
}
