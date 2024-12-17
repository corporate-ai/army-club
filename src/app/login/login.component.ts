import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username:string="";
  password:string="";
  errorMessage:string='';

  constructor(private router:Router,public basicAuthenticationService:BasicAuthenticationService){}
  
  


  // onSubmit() {
  //   console.log(this.username, this.password);
  //   if(this.hardcodedAuthenticationService.authenticate(this.username,this.password)){
  //     this.router.navigate(['welcome',this.username] );
  //     console.log("welcome works");
  //   } else {
  //     this.errorMessage = "Wrong username or password"; // Set the error message console.log("wrong username or password"
  //     console.log("wrong username or password");
  //   }
  // }



   basicAutheticationCheck() {
    this.basicAuthenticationService.basicAuthenticate(this.username,this.password)
    .subscribe(
      data=>{
        this.router.navigate(['welcome',this.username] );
        console.log("welcome works");
      },error=>{
        this.errorMessage = "Wrong username or password"; // Set the error message
    
      }
      )
   }
  }
