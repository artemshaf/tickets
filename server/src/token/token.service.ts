import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/sequelize';
import { hash } from 'bcrypt';
import { RefreshToken } from './models/token.model';
import { IGenerateTokens } from './types';

@Injectable()
export class TokenService {
  constructor(
    @InjectModel(RefreshToken) private refreshTokenRepo: typeof RefreshToken,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async getAllRefreshToken() {
    return this.refreshTokenRepo.findAll();
  }

  async getRefreshTokenByUserId(userId: number) {
    return this.refreshTokenRepo.findOne({ where: { userId } });
  }

  async updateRefreshToken(userId: number, refreshToken: string | null) {
    const token = await this.getRefreshTokenByUserId(userId);

    if (!token) {
      return this.refreshTokenRepo.create({
        userId,
        refreshToken: null,
      });
    }

    const hashedToken = await hash(refreshToken, 6);

    return await this.refreshTokenRepo.update(
      { userId, refreshToken: hashedToken },
      {
        where: {
          userId,
        },
      },
    );
  }

  async generateToken(id: number, email: string): Promise<IGenerateTokens> {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        {
          userId: id,
          email: email,
        },
        {
          secret: this.configService.get<string>('JWT_ACCESS_SECRET'),
          expiresIn: '30m',
        },
      ),
      this.jwtService.signAsync(
        {
          userId: id,
          email: email,
        },
        {
          secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
          expiresIn: '7d',
        },
      ),
    ]);

    return {
      accessToken,
      refreshToken,
    };
  }
}
