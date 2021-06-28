import { Component, OnInit } from '@angular/core';
import data from '../../data/employees.json'

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor() { }
  public employees_data = data

  ngOnInit(): void {
  }

}
