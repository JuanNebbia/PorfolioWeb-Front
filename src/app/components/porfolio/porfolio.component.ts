import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-porfolio',
  templateUrl: './porfolio.component.html',
  styleUrls: ['./porfolio.component.css']
})
export class PorfolioComponent implements OnInit {

  rojo:string = "#f00";

  constructor() { }

  ngOnInit(): void {
  }

}
