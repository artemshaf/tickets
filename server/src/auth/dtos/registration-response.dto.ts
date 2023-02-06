import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class RegistrationResponseDto {
  @Field(() => String)
  accessToken: string;

  @Field(() => String)
  refreshToken: string;
}
