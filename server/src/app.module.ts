import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { databaseConfig } from './configs/db/config';
import { GenreModule } from './genre/genre.module';
import { LocationModule } from './location/location.module';
import { EventModule } from './event/event.module';
import { ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo/dist/drivers';
import { GraphQLConfigService } from './configs/graphql/graphqlconfig.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { RoleModule } from './role/role.module';
import { SequelizeConfigService } from './configs/db/sequelizeconfig.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { TicketModule } from './ticket/ticket.module';
import { EventSectionModule } from './event-section/event-section.module';
import { EventTariffModule } from './event-tariff/event-tariff.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [databaseConfig],
      isGlobal: true,
      envFilePath: './.env',
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useClass: SequelizeConfigService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      imports: [ConfigModule],
      inject: [ConfigService],
      useClass: GraphQLConfigService,
    }),
    UserModule,
    AuthModule,
    RoleModule,
    GenreModule,
    LocationModule,
    EventModule,
    TicketModule,
    EventSectionModule,
    EventTariffModule,
  ],
  controllers: [],
  providers: [SequelizeConfigService],
})
export class AppModule {}
