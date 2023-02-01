import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SequelizeOptionsFactory } from '@nestjs/sequelize';
import { SequelizeModuleOptions } from '@nestjs/sequelize/dist';
import { EnumConfig } from '../enum/enumConfig';

@Injectable()
export class SequelizeConfigService implements SequelizeOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createSequelizeOptions(): SequelizeModuleOptions {
    const {
      pg: { ssl, dialect, host, port, username, password, database },
    } = this.configService.get(EnumConfig.DATABASE);

    return {
      synchronize: this.configService.get('DATABASE_SYNCHRONIZE') || true,
      dialect,
      host,
      port,
      username,
      password,
      database,
      autoLoadModels:
        this.configService.get('DATABASE_AUTO_LOAD_MODELS') || true,
      ssl,
    };
  }
}
