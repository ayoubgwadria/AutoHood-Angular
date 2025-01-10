import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { error } from 'console';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginRequest={email:'',password:''}
  errorMessage:string='';
  successMessage:string='';
  isLoading:boolean=false;
  constructor(private authservice:AuthService, private router:Router) { }

  onSubmit(){
    console.log(this.loginRequest);
    this.authservice.login(this.loginRequest).subscribe(
      (reponse)=>{
        console.log('login successful',reponse);
        this.successMessage=reponse.message;
        localStorage.setItem('authToken', reponse.token);
        setTimeout(()=>{
          this.isLoading=true;
        },1000)
        setTimeout(()=>{
        this.isLoading=false;
        this.router.navigate(['/home']);
        },3000)
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
