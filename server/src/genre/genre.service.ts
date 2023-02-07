import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateGenreInput } from './inputs/create-genre.input';
import { Genre } from './models/genre.model';
import { PubSub } from 'graphql-subscriptions';
import { Args, Subscription } from '@nestjs/graphql';
@Injectable()
export class GenreService {
  private pubSub: PubSub;

  constructor(
    @InjectModel(Genre) private readonly genreRepository: typeof Genre,
  ) {
    this.pubSub = new PubSub();
  }

  async createGenre(createGenreInput: CreateGenreInput) {
    const genre = await this.genreRepository.create(createGenreInput);
    this.pubSub.publish('createGenre', genre);
    return genre;
  }

  @Subscription(() => Genre, {
    filter: (payload, variables) =>
      payload.dataValues.genre === variables.genre,
    resolve: (value) => value,
  })
  async notificationCreateGenre(@Args('genre') genre: string) {
    return this.pubSub.asyncIterator('createGenre');
  }

  async getGenreByValue(value: string) {
    return this.genreRepository.findOne({ where: { genre: value } });
  }

  async deleteGenreByValue(value: string) {
    return this.genreRepository.destroy({ where: { genre: value } });
  }
}
