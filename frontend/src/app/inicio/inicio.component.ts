import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare var M: any;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

$(document).ready(function(){
  $('#demo-carousel-indicators').carousel({fullWidth: true});
 });