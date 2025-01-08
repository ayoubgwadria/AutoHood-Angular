import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { error } from 'console';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginRequest={email:'',password:''}
  errorMessage:string='';
  successMessage:string='';
  constructor(private authservice:AuthService){}

  onSubmit(){
    console.log(this.loginRequest);
    this.authservice.login(this.loginRequest).subscribe(
      (reponse)=>{
        console.log('login successful',reponse);
        this.successMessage=reponse.message;
        localStorage.setItem('authToken', reponse.token);
        setTimeout(()=>{
          this.successMessage=''
        },5000)
      },
      (error)=>{
        console.error('login failed',error)
        this.errorMessage=error.error.message;
        setTimeout(()=>{
          this.errorMessage=''
        },5000)
      }
    );
  }
}
