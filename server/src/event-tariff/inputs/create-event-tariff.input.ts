import { IsNumber, IsPositive } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateEventTariffInput {
  @Field()
  @IsNumber()
  categoryId: number;

  @Field()
  @IsNumber()
  classId: number;

  @Field()
  @IsPositive()
  tariff: number;
}
