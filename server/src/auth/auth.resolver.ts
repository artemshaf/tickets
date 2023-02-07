import { Resolver, Mutation, Query, Args, Int } from '@nestjs/graphql';
import { RefreshToken } from '../token/models/token.model';
import { IGenerateTokens } from '../token/types';
import { CreateUserInput } from '../user/inputs/create-user.input';
import { AuthService } from './auth.service';
import { LoginResponseDto } from './dtos/login-response.dto';
import { RegistrationResponseDto } from './dtos/registration-response.dto';
import { AccessTokenGuard } from './guards/access-token.guard';
import { UseGuards } from '@nestjs/common';
import { IsPublic } from './decorators/public.decorator';
import { RefreshTokenGuard } from './guards/refresh-token.guard';
import { JwtPayloadWithRefrToken } from './types';
import { CurrentUser } from '../token/decorator/current-user.decorator';
import { GetGenerateTokensDto } from '../token/dtos/get-generate-tokens.dto';
import { User } from '../user/models/user.model';

@Resolver('auth')
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @IsPublic()
  @Mutation(() => LoginResponseDto)
  async login(@Args('login') createUserInput: CreateUserInput) {
    return this.authService.login(createUserInput);
  }

  @Mutation(() => User)
  async registration(@Args('registration') createUserInput: CreateUserInput) {
    return this.authService.registration(createUserInput);
  }

  @UseGuards(AccessTokenGuard)
  @Mutation(() => RefreshToken)
  async logout(@Args('userId', { type: () => Int }) userId: number) {
    return this.authService.logout(userId);
  }

  @IsPublic()
  @UseGuards(RefreshTokenGuard)
  @Mutation(() => GetGenerateTokensDto)
  refreshTokens(@CurrentUser() user: JwtPayloadWithRefrToken) {
    return this.authService.refreshTokens(user.userId, user.refreshToken);
  }
}
