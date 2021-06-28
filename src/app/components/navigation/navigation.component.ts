import { Component, OnInit } from '@angular/core';
import 'vanilla-tilt';
declare var VanillaTilt:any;

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    VanillaTilt.init(document.querySelectorAll(".Hover"), {
        max: 25,
        speed: 400
      });
      
  }

}
