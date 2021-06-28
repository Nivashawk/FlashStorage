import { Component, OnInit } from '@angular/core';
import {FormGroup, FormArray, FormBuilder, Validators, FormControl, AbstractControl} from '@angular/forms';
import { DatatransferService } from "../../services/datatransfer.service"

@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.component.html',
  styleUrls: ['./service-form.component.css']
})
export class ServiceFormComponent implements OnInit {
  public first_entry:FormGroup;
  results:object
  formcontrol:any;
  data



  constructor(private datatransfer : DatatransferService) { }

  public dit_form = this.datatransfer.get_FORM_DIT_DATA()
  public di_form = this.datatransfer.get_FORM_DI_DATA()
  onSubmit(){

  }

  

  ngOnInit(): void {

    this.data = this.dit_form
    this.first_entry = new FormGroup({});
    for( var item of this.data){
      //  this.formcontrol.push({[item["field_name"]] : new FormControl("")});
      this.first_entry.addControl(item["field_name"],new FormControl(''));
       console.log(this.formcontrol)
  }
  }

  
}
