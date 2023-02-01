import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateCityInput } from './inputs/create-city.input';
import { CreateCountryInput } from './inputs/create-country.input';
import { CreateLocationInput } from './inputs/create-location.input';
import { LocationService } from './location.service';
import { City } from './models/city.model';
import { Country } from './models/county.model';
import { Location } from './models/location.model';

@Resolver('Location')
export class LocationResolver {
  constructor(private readonly locationService: LocationService) {}

  @Query(() => Location)
  async getLocationByValue(@Args('value') value: string) {
    return await this.locationService.getLocationByValue(value);
  }

  @Query(() => City)
  async getCityByValue(@Args('value') value: string) {
    return await this.locationService.getCityByValue(value);
  }

  @Query(() => Country)
  async getCountryByValue(@Args('value') value: string) {
    return await this.locationService.getCountryByValue(value);
  }

  @Mutation(() => Location)
  async createLocation(
    @Args('createLocation') createLocationInput: CreateLocationInput,
  ) {
    return await this.locationService.createLocation(createLocationInput);
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
