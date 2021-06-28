import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import data from '../../data/FAQ.json';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private router: Router) { }

  public FAQ_data = data

  whatsapp(){
    window.open("//api.whatsapp.com/send?phone=919941233729");
  }

  instagram(){
    window.open("https://www.instagram.com/naveethecolourist/");
  }

  Email(){
    window.open('mailto:contact.flashstorage@gmail.com');
  }

  ngOnInit(): void {

    
  }

}
