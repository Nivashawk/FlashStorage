import { Component, OnInit } from '@angular/core';
import data from '../../data/services.json';
import { Router } from "@angular/router";

@Component({
  selector: 'app-service-dit',
  templateUrl: './service-dit.component.html',
  styleUrls: ['./service-dit.component.css']
})
export class ServiceDitComponent implements OnInit {

  constructor(private router: Router,) { }
  public service_data = data


  // right OnClick routing button starts here

  Route_to_DIT(){
    this.router.navigate(["form/dit"]);
  }
  RightRoute(name){
    if(name == "DIT")
    {
      this.Route_to_DIT()
    }
  }

  // left OnClick routing button starts here

  Route_to_DIT_General(){
    this.router.navigate(["form/dit_general"]);
  }
  
  LeftRoute(name){
    console.log(name);
    
    if(name == "DIT")
    {
      this.Route_to_DIT_General()
    }
  }
  
  // left OnClick routing button ends here
  ngOnInit(): void {
  }

}
