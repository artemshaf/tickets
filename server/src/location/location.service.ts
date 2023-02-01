import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCityInput } from './inputs/create-city.input';
import { CreateCountryInput } from './inputs/create-country.input';
import { CreateLocationInput } from './inputs/create-location.input';
import { City } from './models/city.model';
import { Country } from './models/county.model';
import { Location } from './models/location.model';

@Injectable()
export class LocationService {
  constructor(
    @InjectModel(Location) private readonly locationRepository: typeof Location,
    @InjectModel(City) private readonly cityRepository: typeof City,
    @InjectModel(Country) private readonly countryRepository: typeof Country,
  ) {}

  createLocation(createLocationInput: CreateLocationInput) {
    return this.locationRepository.create(createLocationInput);
  }

  createCity(createCityInput: CreateCityInput) {
    return this.cityRepository.create(createCityInput);
  }

  createCountry(createCountryInput: CreateCountryInput) {
    return this.countryRepository.create(createCountryInput);
  }

  getLocationByValue(value: string) {
    return this.locationRepository.findOne({ where: { value } });
  }

  getCityByValue(value: string) {
    return this.cityRepository.findOne({ where: { value } });
  }

  getCountryByValue(value: string) {
    return this.countryRepository.findOne({ where: { country: value } });
  }
}
