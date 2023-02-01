import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { CreateUserInput } from '../user/inputs/create-user.input';
import { User } from '../user/models/user.model';
import { AuthService } from './auth.service';

@Resolver('auth')
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => User)
  async login(@Args('login') createUserInput: CreateUserInput) {
    return this.authService.login(createUserInput);
  }

  @Mutation(() => User)
  async registration(@Args('registration') createUserInput: CreateUserInput) {
    return this.authService.registration(createUserInput);
  }
}
