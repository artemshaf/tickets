import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateGenreInput } from './inputs/create-genre.input';
import { Genre } from './models/genre.model';

@Injectable()
export class GenreService {
  constructor(
    @InjectModel(Genre) private readonly genreRepository: typeof Genre,
  ) {}

  createGenre(createGenreInput: CreateGenreInput) {
    return this.genreRepository.create(createGenreInput);
  }

  getGenreByValue(value: string) {
    return this.genreRepository.findOne({ where: { genre: value } });
  }

  deleteGenreByValue(value: string) {
    return this.genreRepository.destroy({ where: { genre: value } });
  }
}
