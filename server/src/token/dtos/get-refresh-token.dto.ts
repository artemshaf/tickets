import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class GetRefreshTokenDto {
  @Field(() => Number)
  id: number;

  @Field(() => Number)
  userId: number;

  @Field({ nullable: true })
  refreshToken?: string;
}
