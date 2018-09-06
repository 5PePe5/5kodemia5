import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';



@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  posts = [];
  constructor(private dataservice: DataService) {
    this.dataservice.getData().subscribe(data => {
      this.posts = data;

      console.log(data);
    });
  }

  ngOnInit() {
  }

}
