import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { SequelizeModule } from '@nestjs/sequelize';
import { AccessTokenStrategy } from '../auth/stratagies/access-token.stratagy';
import { RefreshTokenStrategy } from '../auth/stratagies/refresh-token.stratagy';
import { User } from '../user/models/user.model';
import { RefreshToken } from './models/token.model';
import { TokenResolver } from './token.resolver';
import { TokenService } from './token.service';

@Module({
  imports: [
    SequelizeModule.forFeature([RefreshToken, User]),
    ConfigModule,
    JwtModule.register({}),
    PassportModule.register({
      defaultStrategy: 'jwt-refresh',
    }),
  ],
  exports: [TokenService],
  providers: [TokenService, TokenResolver, RefreshTokenStrategy],
})
export class TokenModule {}
