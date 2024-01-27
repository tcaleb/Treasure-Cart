import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent {

  showPassword: boolean = false;

  signupFormGroup: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required])

  });

 

  

  constructor() {
    this.signupFormGroup.get('confirmPassword')?.setValidators([
      Validators.required,
      this.matchPassword.bind(this)
    ]);
  }

  //  matchPassword validation 
  matchPassword(control: FormControl): { [key: string]: boolean } | null {
    console.log('matchPassword called');
    const password = this.signupFormGroup.get('password')?.value;
    const confirmPassword = control.value;
  
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  
    return password === confirmPassword ? null : { 'passwordMismatch': true };
  }



   



  // Function to toggle password visibility
  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
