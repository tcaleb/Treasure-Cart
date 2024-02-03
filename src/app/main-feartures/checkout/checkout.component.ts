import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  ngOnInit(): void {
  }

  checkoutFormGroup: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    addressLine1: new FormControl('', [Validators.required]),
    addressLine2: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]), // The empty '', is for default values
    stateProvinceRegion: new FormControl('', [Validators.required]),
    zipPostalCode: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required])
  });

  checkout(credentials: any){
    console.log("checkout credentilas", credentials);
  }
}
