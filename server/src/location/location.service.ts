import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCityInput } from './inputs/create-city.input';
import { CreateCountryInput } from './inputs/create-country.input';
import { City } from './models/city.model';
import { Country } from './models/county.model';
@Injectable()
export class LocationService {
  constructor(
    @InjectModel(City) private readonly cityRepository: typeof City,
    @InjectModel(Country) private readonly countryRepository: typeof Country,
  ) {}

  createCity(createCityInput: CreateCityInput) {
    return this.cityRepository.create(createCityInput);
  }

  createCountry(createCountryInput: CreateCountryInput) {
    return this.countryRepository.create(createCountryInput);
  }

  getCityByValue(value: string) {
    return this.cityRepository.findOne({ where: { value } });
  }

  getCountryByValue(value: string) {
    return this.countryRepository.findOne({ where: { country: value } });
  }
}
