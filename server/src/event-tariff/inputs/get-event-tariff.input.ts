import { IsString } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class GetEventTariffInput {
  @Field()
  @IsString()
  categoryId: number;

  @Field()
  @IsString()
  classId: number;
}
