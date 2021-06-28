import { Component, OnInit } from '@angular/core';
import data from '../../data/projects.json';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }
  public project_data = data

  ngOnInit(): void {
  }

}
