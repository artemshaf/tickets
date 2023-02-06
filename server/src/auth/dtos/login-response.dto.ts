import { Field, ObjectType } from '@nestjs/graphql';
import { User } from '../../user/models/user.model';

@ObjectType()
export class LoginResponseDto {
  @Field(() => String)
  accessToken: string;

  @Field(() => String)
  refreshToken: string;

  @Field(() => User)
  user: User;
}
