import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class GetGenerateTokensDto {
  @Field(() => String)
  refreshToken: string;

  @Field(() => String)
  accessToken: string;
}
