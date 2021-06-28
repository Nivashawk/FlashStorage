import { Component, OnInit } from '@angular/core';
import {FormGroup, FormArray, FormBuilder, Validators, FormControl, AbstractControl} from '@angular/forms';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;
import dit_form_data from "../../../data/forms/dit.json"

@Component({
  selector: 'app-dit-general',
  templateUrl: './dit-general.component.html',
  styleUrls: ['./dit-general.component.css']
})
export class DitGeneralComponent implements OnInit {

  dit_data = dit_form_data
  public first_entry:FormGroup;
  results:object
  formcontrol:any;
  data
  TND:number;
  PC:number;
  TNSC:number;
  SC:number;
  SCID:number;
  HST:number;
  HDD_PRICE:number
  OVERALL_HDD_PRICE:any
  TOTAL_STORAGE_NEEDED:number
  HDD_NEEDED:any
  TOTAL_HDD_NEEDED:any
  OVERALL_SERVICE_CHARGES:any
  QUOTATION_WITHOUT_GST:number
  QUOTATION_WITH_GST:any
  GST:number
  primary_camera_budget
  secondary_camera_budget
  PRO_NAME
  submitError: Boolean = false;
  checkbox_flag:FormControl = new FormControl(false);

  constructor(public fb: FormBuilder) { }

  
  onSubmit(){

    this.PRO_NAME = this.first_entry.get('PRODUCTION_NAME').value
    // console.log(this.TND);
    this.TND = this.first_entry.get('TOTAL_NO_OF_DAYS').value
    // console.log(this.TND);

   
    // QOUTATION CALCULATION STARTS HERE

    this.OVERALL_SERVICE_CHARGES = Math.round((this.TND * 2500)).toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,");
    // console.log(this.OVERALL_SERVICE_CHARGES);



    // QOUTATION CALCULATION ENDS HERE


    // PDF GENERATOR STARTS HERE

    var dd = {
      pageSize: 'A4',
      pageOrientation: 'portrait',
      info: {
        title: 'FLASH STORAGE DIT QOUTATION',
        author: 'FLASH STORAGE',
        },
      watermark: { text: 'FLASH STORAGE', angle: -30, opacity: 0.2, bold: true, fontSize: 70},
      content: [

        {
          image: 'data:image/png;base64,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',
          height: 40,
          width: 80,
          style: 'img'
        },

        // HEADING

        {
          text: 'DIGITAL DATA MANAGEMENT',
          style: 'header',
          alignment: 'center',
        },

        // HEADING ENDS
      
        // BASIC INFO

        {
          alignment: 'justify',
          style:'to',
          columns: [
            {
              text: 'To,'
            },
            {
              width: 90,
              text: `Date:${new Date().toLocaleDateString()}`
            }
          ],
        },
        {
          text: `Production:${this.PRO_NAME}`,
          style: 'sub'
        },

        // BASIC INFO ENDS

        // SUB STARTS

        {
          text: 'Sub:Digital Film Data Management Services',
          style: 'sub',
          alignment: 'center',
        },

        // // SUB ENDS

        // RESPECTED SIR STARTS

        {
          text: 'Respected Sir, \n\n With reference to your enquiry regarding Digital Data Management Services, we are pleased to quote our PACKAGE as follows;',
          style: 'para',
          alignment: 'left',
        },
        
        // RESPECTED SIR ENDS

        // QUOTATION STARTS

        {
          text: 'QUOTATION:',
          style: 'subheading1',
          alignment: 'left',
        },

        {
          text: 'Scope Of Work:',
          style: 'subheading2',
          alignment: 'left',
        },

        {
          text: 'Off Set/On Set: Transfer & Transcoding of SOURCE data for offline editing.',
          style: 'para',
          alignment: 'left',
        },

        {
          text: 'Tariff:',
          style: 'subheading2',
          alignment: 'left',
        },

        {
          text: 'Transfer and backup of RAW/SOURCE footage',
          style: 'para',
          alignment: 'left',
        },

        {
          alignment: 'justify',
          style:'para',
          columns: [
            {
              text: 'ESTIMATED TOTAL NO. OF DAYS OF SHOOT'
            },
            {
              text: `${this.TND} days`
            }
          ],
        },

        {
          alignment: 'justify',
          style:'para',
          columns: [
            {
              text: 'ESTIMATED OVERALL SERVICE CHARGES'
            },
            {
              color:'red',
              text: `RS.${this.OVERALL_SERVICE_CHARGES}/-`
            }
          ],
        },

        
        {
          text: 'Terms:',
          style: 'subheading2',
          alignment: 'left',
        },

        {
          text: '1. FLASH STORAGE will be responsible only for maintaining Three Backup copies and Transcode files in their own Server Hard drive and Raid Box.',
          style: 'para',
          alignment: 'left',
        },

        {
          text: '2. From the storage we maintain everything in our office.',
          style: 'para',
          alignment: 'left',
        },

        {
          text: '3. Production must provide required HDD’s for Transport of the footage for (Editing/CG) purpose.',
          style: 'para',
          alignment: 'left',
        },

        {
          text: '4. No extra charges for multiple cameras.',
          style: 'para',
          alignment: 'left',
        },

        {
          text: '5. Daily conveyance Rs.500/-(For the D.I.Technician in the shooting spot)',
          style: 'para',
          alignment: 'left',
        },

        {
          text: '6. Editing Footage must be followed by the Production side or Direction side.',
          style: 'para',
          alignment: 'left',
        },

        {
          text: '7. After the completion of the shoot single Hard disk Backup will be given to Producer or D.I. After Settlement of the full amount, you will receive the single backup RAW files (Hard Disk).',
          style: 'para',
          alignment: 'left',
        },

        {
          text: '8. We keep overall footage for 6 months from the end of the last shoot day. We will inform the production company before erasing the footage from the server after the grace period as mentioned. If incase the production wants a backup, Production must provide us the required Hard Disks. We will provide the entire footage in Hard drive.',
          style: 'para',
          alignment: 'left',
        },

        {
          text: '9. This kind of backup is 100 percent safe and secure. Kindly do the agreement form and other formalities.',
          style: 'para',
          alignment: 'left',
        },

        {
          text: '10. Daily Transport & A.C Rooms or Caravans must be provided for the D.I.T in the shooting spot. On the outdoor shoot the D.I.T’s must be provided with A.C rooms. It is compulsory to ensure the safety of the footages.',
          style: 'para',
          alignment: 'left',
        },

        {
          text: '11. 50% Advance payment must be paid before the shoot starts,Balance amount must be paid before the shoot ends.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n',
          style: 'para',
          alignment: 'left',
        },

        {
          text: 'Sincerely',
          style: 'para',
          width:40,
          alignment: 'left',
        },

        {
          alignment: 'justify',
          style:'para',
          columns: [
            {
              text: 'For FLASH STORAGE'
            },
            {
              text: 'Herby accept & confirm the above'
            }
          ],
          columnGap: 200
        },


        {
          alignment: 'justify',
          style:'para',
          columns: [
            {
              text: 'Authorized Signatory'
            },
            {
              text: 'The Producer'
            }
          ],
          columnGap: 200
        },

        {
          alignment: 'justify',
          style:'para',
          columns: [
            {
              text: ''
            },
            {
              text: 'DATE'
            }
          ],
          columnGap: 200
        },

        
        // QUOTATION ENDS

      ],

      // STYLING STARTS

      styles: {

        img:{
          margin: [0,10, 0, 20]
        },

        header: {
          fontSize: 18,
          bold: true,
          alignment: 'justify',
          margin: [0, 10, 0, 30]
        },

        to: {
          fontSize: 10,
          alignment: 'justify',
          margin: [0, 10, 0, 10]
        },

        sub: {
          fontSize: 10,
          decoration: 'underline',
          bold: true,
          alignment: 'justify',
          margin: [0, 10, 0, 10]
        },

        subheading1: {
          fontSize: 10,
          bold: true,
          decoration: 'underline',
          alignment: 'justify',
          margin: [0, 10, 0, 10]
        },

        subheading2: {
          fontSize: 10,
          bold: true,
          alignment: 'justify',
          margin: [0, 10, 0, 10]
        },

        para: {
          fontSize: 10,
          alignment: 'justify',
          margin: [0, 10, 0, 10]
        }
      }
    }

    if (!this.first_entry.invalid) {
      this.submitError = false;
      pdfMake.createPdf(dd).download("FLASHSTORAGE DIT-GENERAL_QUOTATION");
    } else {
      this.submitError = true;
    }

    // PDF GENERATOR ENDS HERE
  }

  ngOnInit(): void {
    // console.log(this.checkbox_flag.value);
    
    

    this.data = this.dit_data
    this.first_entry = this.fb.group
    ({
      PRODUCTION_NAME : new FormControl(),
      TOTAL_NO_OF_DAYS : new FormControl('', [Validators.required,Validators.pattern('[0-9]+')]),
    })
  }
}
