import { Role } from './models/role.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateRoleInput } from './inputs/create-role.input';

@Injectable()
export class RoleService {
  constructor(@InjectModel(Role) private roleRepository: typeof Role) {}

  async getAllRoles() {
    const roles = this.roleRepository.findAll();
    return roles;
  }

  async getRoleByValye(value: string) {
    const role = this.roleRepository.findOne({ where: { value } });
    return role;
  }

  async createRole(roleInput: CreateRoleInput) {
    const role = this.roleRepository.create(roleInput);
    return role;
  }
}
