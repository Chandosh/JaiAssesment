import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from 'src/app/service/weather.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  stateNmae: string;
  countryName: string;
  weatherData;
  constructor(private route: ActivatedRoute, private weatherService:WeatherService) { 
  
    this.weatherService.castUser.subscribe((data) => {
      this.weatherData = data;
    });
  }

  ngOnInit(): void {
    this.stateNmae = this.route.snapshot.paramMap.get('city');
    this.countryName = this.route.snapshot.paramMap.get('country');
    this.weatherService.getWeatherData(this.stateNmae, this.countryName);
    console.log(this.weatherData);
  }

}
