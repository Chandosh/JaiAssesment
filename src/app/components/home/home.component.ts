import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WeatherService } from '../../service/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cityControl;
  selectedValue;

  cities;
  constructor(private weatherService: WeatherService,
    private router: Router) {
    this.cityControl = new FormControl("", [Validators.required]);
    this.cities = [];
   }

  ngOnInit(): void {
    this.cities = this.weatherService.getCityData();
  }

  submit() {
    const item = this.cities.filter(x => x.name === this.cityControl.value)[0];
    this.router.navigate(['/list', {city: this.cityControl.value, country: item.country}]);

  }

}
