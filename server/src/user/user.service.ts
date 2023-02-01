import { RoleService } from './../role/role.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import {
  ROLE_NOT_EXISTS,
  USER_DEFAULR_ROLE,
  USER_NOT_EXISTS,
  USER_ROLE,
  USER_ROLES,
} from './user.constants';
import { CreateUserInput } from './inputs/create-user.input';
import { AddRoleUserInput } from './inputs/add-role-user.input';
import { Role } from '../role/models/role.model';
import { User } from './models/user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User) private userRepository: typeof User,
    private roleService: RoleService,
  ) {}

  async create(userDto: CreateUserInput): Promise<User> {
    const user = await this.userRepository.create(userDto);
    const role = await this.roleService.getRoleByValye(USER_DEFAULR_ROLE);
    await user.$set(USER_ROLES, [role.id]);
    user.roles = [role];
    return user;
  }

  async getAllUsers(): Promise<User[]> {
    const users = this.userRepository.findAll();
    return users;
  }

  async getUserByEmail(email: string): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { email },
      include: {
        all: true,
      },
    });
    return user;
  }

  async addRole(useRoleDto: AddRoleUserInput): Promise<Role> {
    const user = await this.userRepository.findByPk(useRoleDto.userId);
    if (!user) {
      throw new HttpException(USER_NOT_EXISTS, HttpStatus.NOT_FOUND);
    }
    const role = await this.roleService.getRoleByValye(useRoleDto.value);
    if (!role) {
      throw new HttpException(ROLE_NOT_EXISTS, HttpStatus.NOT_FOUND);
    }
    await user.$add(USER_ROLE, role.id);
    return role;
  }
}
