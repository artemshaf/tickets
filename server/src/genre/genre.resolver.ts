import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GenreService } from './genre.service';
import { CreateGenreInput } from './inputs/create-genre.input';
import { Genre } from './models/genre.model';

@Resolver('Genre')
export class GenreResolver {
  constructor(private readonly genreService: GenreService) {}

  @Mutation(() => Genre)
  async createGenre(@Args('createGenre') createGenreInput: CreateGenreInput) {
    return await this.genreService.createGenre(createGenreInput);
  }

  @Query(() => Genre)
  async getGenreByValue(@Args('value') value: string) {
    return await this.genreService.getGenreByValue(value);
  }

  @Mutation(() => Genre)
  async deleteGenreByValue(@Args('value') value: string) {
    return await this.genreService.deleteGenreByValue(value);
  }
}
