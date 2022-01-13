import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-c',
  templateUrl: './weather-c.component.html',
  styleUrls: ['./weather-c.component.css'],
})
export class WeatherCComponent implements OnInit {
  @Input() weatherData!: data[];
  results: data[] = [];
  result: any = {};
  ngOnInit() {}
  search(value: any) {
    this.results = this.weatherData.filter((city) => city.name == value.value);
    if (this.results.length > 0) {
      this.result = this.results[0];
    } else this.result = {};
    console.log(this.results.length);
  }
}

interface data {
  name: string;
  temperature: string;
  wind: string;
  humidity: string;
}
