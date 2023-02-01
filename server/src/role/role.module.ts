import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { Role } from './models/role.model';
import { UserRole } from './models/user-role.model';
import { RoleResolver } from './role.resolver';
import { User } from '../user/models/user.model';

@Module({
  imports: [SequelizeModule.forFeature([Role, User, UserRole])],
  providers: [RoleService, RoleResolver],
  controllers: [],
  exports: [RoleService],
})
export class RoleModule {}
