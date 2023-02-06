import { Resolver, Mutation, Args, Int } from '@nestjs/graphql';
import { RefreshToken } from '../token/models/token.model';
import { IGenerateTokens } from '../token/types';
import { CreateUserInput } from '../user/inputs/create-user.input';
import { AuthService } from './auth.service';
import { LoginResponseDto } from './dtos/login-response.dto';
import { RegistrationResponseDto } from './dtos/registration-response.dto';
import { AccessTokenGuard } from './guards/access-token.guard';
import { UseGuards } from '@nestjs/common';

@Resolver('auth')
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => LoginResponseDto)
  async login(@Args('login') createUserInput: CreateUserInput) {
    return this.authService.login(createUserInput);
  }

  @Mutation(() => RegistrationResponseDto)
  async registration(
    @Args('registration') createUserInput: CreateUserInput,
  ): Promise<IGenerateTokens> {
    return this.authService.registration(createUserInput);
  }

  @UseGuards(AccessTokenGuard)
  @Mutation(() => RefreshToken)
  async logout(@Args('userId', { type: () => Int }) userId: number) {
    return this.authService.logout(userId);
  }
}
