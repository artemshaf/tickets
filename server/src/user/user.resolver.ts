import { Mutation, Resolver, Args, Query } from '@nestjs/graphql';
import { AddRoleUserInput } from './inputs/add-role-user.input';
import { CreateUserInput } from './inputs/create-user.input';
import { User } from './models/user.model';
import { UserService } from './user.service';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  async create(@Args('createUser') createUserInput: CreateUserInput) {
    return await this.userService.create(createUserInput);
  }

  @Query(() => [User])
  async getAllUsers() {
    return await this.userService.getAllUsers();
  }

  @Query(() => User)
  async getUserByEmail(@Args('email') email: string) {
    return await this.userService.getUserByEmail(email);
  }

  @Mutation(() => User)
  async addRole(@Args('addRole') addUserRoleInput: AddRoleUserInput) {
    return await this.userService.addRole(addUserRoleInput);
  }
}
