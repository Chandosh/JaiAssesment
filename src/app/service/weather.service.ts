import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as data from '../city.json';
import { HttpService } from './http-service';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  cityList;

  weatherData = new BehaviorSubject<any>('');
  castUser = this.weatherData.asObservable();

  constructor(private httpService: HttpService) { }

  ngOnInit(){
    this.getCityData();
  }

  getCityData() {
    this.cityList = data;
    return this.cityList.default;
  }

  getWeatherData(cityName, countryName) {
    const apiKey = "f5d9b81ed866181c8d18d50301c16eae";
    let url = "data/2.5/weather?q= " + cityName + ',' + countryName + "&appid=" + apiKey;
    this.httpService.get(url, null).subscribe((data) => {
      this.sendData(data);
    }, error => {

    });
  }
  sendData(data) {
    this.weatherData.next(data);
  }
}
