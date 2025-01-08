import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerRequest={lastname:'',firstname:'',email:'',password:''}
  errorMessage:string='';
  successMessage:string='';
  constructor(private authservice:AuthService){}

  onSubmit(){
    this.authservice.register(this.registerRequest).subscribe(
      (reponse)=>{
        console.log('register successful',reponse);
        this.successMessage=reponse.message;
        console.log(this.successMessage);
        setTimeout(()=>{
          this.successMessage=''
        },5000)
      },
      (error)=>{
        console.error('register failed',error)
        this.errorMessage=error.error.message;
        console.log(this.errorMessage);
        setTimeout(()=>{
          this.errorMessage=''
        },5000)
      }
    );
  }
}
