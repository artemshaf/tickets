import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';
import { AuthResolver } from './auth.resolver';
import { AccessTokenStrategy } from './stratagies/access-token.stratagy';
import { RefreshTokenStrategy } from './stratagies/refresh-token.stratagy';
import { TokenModule } from '../token/token.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../user/models/user.model';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    SequelizeModule.forFeature([User]),
    JwtModule.register({}),
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
    TokenModule,
    forwardRef(() => UserModule),
  ],
  controllers: [],
  providers: [
    AuthService,
    AuthResolver,
    AccessTokenStrategy,
    RefreshTokenStrategy,
  ],
  exports: [AuthModule],
})
export class AuthModule {}
