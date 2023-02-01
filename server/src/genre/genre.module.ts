import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { GenreResolver } from './genre.resolver';
import { Genre } from './models/genre.model';
import { GenreService } from './genre.service';

@Module({
  imports: [SequelizeModule.forFeature([Genre])],
  providers: [GenreResolver, GenreService],
})
export class GenreModule {}
