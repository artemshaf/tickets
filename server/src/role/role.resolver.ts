import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateRoleInput } from './inputs/create-role.input';
import { Role } from './models/role.model';
import { RoleService } from './role.service';

@Resolver('Role')
export class RoleResolver {
  constructor(private readonly roleService: RoleService) {}

  @Query(() => Role)
  getRoleByValye(@Args('value') value: string) {
    return this.roleService.getRoleByValye(value);
  }

  @Query(() => [Role])
  getAllRoles() {
    return this.roleService.getAllRoles();
  }

  @Mutation(() => Role)
  createRole(@Args('createRole') createRoleInput: CreateRoleInput) {
    return this.roleService.createRole(createRoleInput);
  }
}
