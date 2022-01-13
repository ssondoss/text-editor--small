import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c-to-f',
  templateUrl: './c-to-f.component.html',
  styleUrls: ['./c-to-f.component.css'],
})
export class CToFComponent implements OnInit {
  celiValue!: number;
  ferValue!: number;
  celiToFer() {
    this.ferValue = this.celiValue * (9 / 5) + 32;
    this.ferValue = parseFloat(this.ferValue.toFixed(1));
  }
  FerToCeil() {
    this.celiValue = ((this.ferValue - 32) * 5) / 9;
    this.celiValue = parseFloat(this.celiValue.toFixed(1));
  }

  constructor() {}

  ngOnInit(): void {}
}
