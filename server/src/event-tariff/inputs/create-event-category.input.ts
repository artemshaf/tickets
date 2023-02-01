import { IsString } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateEventCategoryInput {
  @Field()
  @IsString()
  value: string;

  @Field()
  @IsString()
  description: string;
}
