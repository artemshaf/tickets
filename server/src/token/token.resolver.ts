import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { CurrentUser } from './decorator/current-user.decorator';
import { CurrentUserId } from './decorator/current-user-id.decorator';
import { GetGenerateTokensDto } from './dtos/get-generate-tokens.dto';
import { GetRefreshTokenDto } from './dtos/get-refresh-token.dto';
import { TokenService } from './token.service';
import { IsPublic } from '../auth/decorators/public.decorator';
import { UseGuards } from '@nestjs/common';
import { RefreshTokenGuard } from '../auth/guards/refresh-token.guard';
import { JwtPayload } from '../auth/types';

@Resolver('Token')
export class TokenResolver {
  constructor(private readonly tokenService: TokenService) {}

  @Query(() => GetRefreshTokenDto)
  getRefreshTokenByUserId(@Args('id', { type: () => Int }) id: number) {
    return this.tokenService.getRefreshTokenByUserId(id);
  }

  @Query(() => [GetRefreshTokenDto])
  getAllTokens() {
    return this.tokenService.getAllRefreshToken();
  }

  @IsPublic()
  @UseGuards(RefreshTokenGuard)
  @Query(() => GetGenerateTokensDto)
  generateTokens(@CurrentUser() user: JwtPayload) {
    return this.tokenService.refreshTokens(user.userId, user.email);
  }
}
