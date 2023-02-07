import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { GetRefreshTokenDto } from './dtos/get-refresh-token.dto';
import { TokenService } from './token.service';

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
}
