import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateCityInput } from './inputs/create-city.input';
import { CreateCountryInput } from './inputs/create-country.input';
import { LocationService } from './location.service';
import { City } from './models/city.model';
import { Country } from './models/county.model';

@Resolver('Location')
export class LocationResolver {
  constructor(private readonly locationService: LocationService) {}

  @Query(() => City)
  async getCityByValue(@Args('value') value: string) {
    return await this.locationService.getCityByValue(value);
  }

  @Query(() => Country)
  async getCountryByValue(@Args('value') value: string) {
    return await this.locationService.getCountryByValue(value);
  }

  @Mutation(() => City)
  async createCity(@Args('createCity') createCityInput: CreateCityInput) {
    return await this.locationService.createCity(createCityInput);
  }

  @Mutation(() => Country)
  async createCountry(
    @Args('createCountry') createCountryInput: CreateCountryInput,
  ) {
    return await this.locationService.createCountry(createCountryInput);
  }
}
