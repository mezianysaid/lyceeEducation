import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/Services/_auth/authentification.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
// import { throwToolbarMixedModesError } from '@angular/material/toolbar';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {

  constructor(public AuthService:AuthentificationService,private router:Router,private _http:HttpClient) { }
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSeccesMessage!:boolean;
  serverErrorMessage!:string;
  roleSelected!:string
  messagepass!:string;
  selectedFile=null;
  imageData!:string;
  ngOnInit(): void {
    // this.AuthService.CkeckConfPass(this.AuthService.formUser.get('password')?.value,this.AuthService.formUser.get('Confirmpassword')?.value);
  }
 roles:string[]=['ADMIN','USER']
  onSubmit(){
    if(this.AuthService.formUser.valid){     
      if(!this.AuthService.CkeckConfPass(this.AuthService.formUser.get('password')?.value,this.AuthService.formUser.get('Confirmpassword')?.value))
        {
          this.AuthService.RegisterUser(this.AuthService.formUser.value.fullName,this.AuthService.formUser.value.email,this.AuthService.formUser.value.password,this.AuthService.formUser.value.Roles,
            this.AuthService.formUser.value.idAdmin).subscribe(res=>{
           
          this.showSeccesMessage=true;
          this.AuthService.formUser.reset();
        
          }
          ,err=>{
               this.serverErrorMessage=err.error});
        }
  }
}
 
}
