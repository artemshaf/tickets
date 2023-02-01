import { Injectable } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import {
  HttpException,
  UnauthorizedException,
} from '@nestjs/common/exceptions';
import { JwtService } from '@nestjs/jwt';
import { compare, hash } from 'bcrypt';
import { CreateUserInput } from '../user/inputs/create-user.input';
import { User } from '../user/models/user.model';

import { UserService } from './../user/user.service';
import { USER_EXISTS, USER_NOT_EXISTS } from './auth.constants';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(userInput: CreateUserInput) {
    const user = await this.validateUser(userInput);
    return user;
  }

  async registration(userInput: CreateUserInput) {
    const user = await this.userService.getUserByEmail(userInput.email);
    console.log(user);
    if (user) {
      throw new HttpException(USER_EXISTS, HttpStatus.BAD_REQUEST);
    }
    const hashPassword = await hash(userInput.password, 6);
    const hashedUser = await this.userService.create({
      ...userInput,
      password: hashPassword,
    });
    return this.generateToken(hashedUser);
  }

  private async generateToken(user: User) {
    const payload = { email: user.email, id: user.id };
    const token = this.jwtService.sign(payload);
    return {
      token,
    };
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
