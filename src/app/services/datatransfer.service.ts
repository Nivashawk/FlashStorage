import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatatransferService {
  dit_form_data:any
  di_form_data:any

  constructor() { }

  set_FORM_DIT_DATA(data:any){
    this.dit_form_data = data;
  }

  get_FORM_DIT_DATA(){
    return this.dit_form_data
  }

  set_FORM_DI_DATA(data:any){
    this.di_form_data = data;
  }

  get_FORM_DI_DATA(){
    return this.di_form_data
  }

}






