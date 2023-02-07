import { IsNumber, IsString } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateCityInput {
  @Field()
  @IsString()
  city: string;

  @Field()
  @IsNumber()
  countryId: number;
}
