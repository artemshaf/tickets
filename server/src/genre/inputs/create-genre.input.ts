import { IsString } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateGenreInput {
  @Field()
  @IsString()
  genre: string;

  @Field()
  @IsString()
  description: string;
}
