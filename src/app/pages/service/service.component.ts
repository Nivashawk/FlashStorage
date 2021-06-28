import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import data from '../../data/services.json';
import dit_form_data from "../../data/forms/dit.json"
import di_form_data from "../../data/forms/di.json"
import { DatatransferService } from "../../services/datatransfer.service"

import 'vanilla-tilt';
declare var VanillaTilt:any;

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit, AfterViewInit  {

  constructor(
    private router: Router,
    private datatransfer : DatatransferService
    ) {}

  public service_data = data
  dit_data = dit_form_data
  di_data = di_form_data
  Data:any;
  button_visible

  
  





  // overall OnClick BOX routing starts here


  Route_to_SERVICEDIT(){
    this.router.navigate(["service/dit"]);
  }

  // Route_to_SERVICECONFORMING(){
  //   this.router.navigate(["service/conforming"]);
  // }

  Route_to_SERVICEDI(){
    this.router.navigate(["service/di"]);
  }

  Route_to_DEVELOPMENT(){
    this.router.navigate(["service/WD"]);
  }

  Route_to_EDITING(){
    alert("THIS PAGE IS UNDER CONSTRUCTION")
  }

  Route_to_SERVICE(name){
    // console.log(name);
    
    if(name == "DIT")
    {
      this.Route_to_SERVICEDIT()
    }
    // else if(name == "CONFORMING")
    // {
    //   this.Route_to_SERVICECONFORMING()
    // }
    else if(name == "DI")
    {
      this.Route_to_SERVICEDI()
    }
    else if(name == "DEVELOPMENT")
    {
      this.Route_to_DEVELOPMENT()
    }
    else if(name == "EDITING")
    {
      this.Route_to_EDITING()
    }
  }

  // overall OnClick BOX routing ends here



  // right OnClick routing button starts here

  Route_to_DIT(){
    this.router.navigate(["form/dit"]);
  }

  Route_to_DI(){
    alert("THIS PAGE IS UNDER CONSTRUCTION")
  }

  // Route_to_CONFORMING(){
  //   alert("THIS PAGE IS UNDER CONSTRUCTION")
  // }

  RightRoute(name){
    // console.log(name);
    
    if(name == "DIT")
    {
      this.Route_to_DIT()
    }
    // else if(name == "CONFORMING")
    // {
    //   this.Route_to_CONFORMING()
    // }
    else if(name == "DI")
    {
      this.Route_to_DI()
    }
  }
  
  // right OnClick routing button ends here

  // left OnClick routing button starts here

  Route_to_DIT_General(){
    this.router.navigate(["form/dit_general"]);
  }

  Route_to_DI_General(){
    window.open("assets/quotations/DI.pdf")
  }

  // Route_to_CONFORMING_General(){
  //   window.open("assets/quotations/DIT.pdf")
  // }

  Route_to_WD_General(){
    window.open("assets/quotations/zedByte-2.pdf")
  }

  LeftRoute(name){
    // console.log(name);
    
    if(name == "DIT")
    {
      this.Route_to_DIT_General()
    }
    // else if(name == "CONFORMING")
    // {
    //   this.Route_to_CONFORMING_General()
    // }
    else if(name == "DI")
    {
      this.Route_to_DI_General()
    }
    else if(name == "DEVELOPMENT")
    {
      this.Route_to_WD_General()
    }
  }
  
  // left OnClick routing button ends here

  ngOnInit(): void {

    
    }
    
    ngAfterViewInit(): void {

      VanillaTilt.init(document.querySelectorAll(".card"), {
        max: 25,
        speed: 400
      });
      

    }
  }

