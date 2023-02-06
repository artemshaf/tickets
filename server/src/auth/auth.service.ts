import { Injectable } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import {
  HttpException,
  UnauthorizedException,
} from '@nestjs/common/exceptions';
import { compare, hash } from 'bcrypt';
import { TokenService } from '../token/token.service';
import { CreateUserInput } from '../user/inputs/create-user.input';

import { UserService } from './../user/user.service';
import { USER_EXISTS, USER_NOT_EXISTS } from './auth.constants';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private tokenService: TokenService,
  ) {}

  async login(userInput: CreateUserInput) {
    const user = await this.validateUser(userInput);
    const tokens = await this.tokenService.generateToken(user.id, user.email);
    await this.tokenService.updateRefreshToken(user.id, tokens.refreshToken);
    return {
      user,
      ...tokens,
    };
  }

  async registration(userInput: CreateUserInput) {
    const user = await this.userService.getUserByEmail(userInput.email);

    if (user) {
      throw new HttpException(USER_EXISTS, HttpStatus.BAD_REQUEST);
    }

    const hashedPassword = await hash(userInput.password, 6);
    const hashedUser = await this.userService.create({
      ...userInput,
      password: hashedPassword,
    });

    return this.tokenService.generateToken(hashedUser.id, hashedUser.email);
  }

  async logout(userId: number) {
    return this.tokenService.updateRefreshToken(userId, null);
  }

  private async validateUser(userDto: CreateUserInput) {
    const user = await this.userService.getUserByEmail(userDto.email);
    if (!user) {
      throw new UnauthorizedException({
        message: USER_NOT_EXISTS,
      });
    }
    const passwordEqauls = await compare(userDto.password, user.password);
    if (!passwordEqauls) {
      throw new UnauthorizedException({
        message: USER_NOT_EXISTS,
      });
    }
    return user;
  }
}
