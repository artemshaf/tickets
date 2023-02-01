import { IsString } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateCountryInput {
  @Field()
  @IsString()
  country: string;
}
