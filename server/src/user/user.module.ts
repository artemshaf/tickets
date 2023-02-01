import { UserRole } from './../role/models/user-role.model';
import { UserService } from './user.service';
import { forwardRef, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { RoleModule } from '../role/role.module';
import { AuthModule } from '../auth/auth.module';
import { Role } from '../role/models/role.model';
import { UserResolver } from './user.resolver';
import { User } from './models/user.model';

@Module({
  imports: [
    SequelizeModule.forFeature([User, Role, UserRole]),
    RoleModule,
    forwardRef(() => AuthModule),
  ],
  controllers: [],
  providers: [UserService, UserResolver],
  exports: [UserService],
})
export class UserModule {}
