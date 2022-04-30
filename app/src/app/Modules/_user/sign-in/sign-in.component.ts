import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/Services/_auth/authentification.service';
// import { token } from 'lodash';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  error?: "";

  constructor(public _AuthService:AuthentificationService,private router:Router,private dialog:MatDialog) { }
// token!:string
  ngOnInit(): void {
    if(this._AuthService.isLoggedIn()){
      this.router.navigateByUrl('/home');
    }
  }

  onSubmit(){
    if(this._AuthService.formSignIn.valid){
      this._AuthService.Login(this._AuthService.formSignIn.value).subscribe(
        (res:any )=>{ 
             this._AuthService.setToken(res.token);
             this.router.navigateByUrl('home')
             this.dialog.closeAll();
             this._AuthService.formSignIn.reset();
      },err=>{
          // if(err.status == 404){   
            console.log('error:',err);
            this.error=err.error;    
          // }
      });
    } 
  }
showLogin(){
  if(this._AuthService.isAuthenticated)
    this.router.navigateByUrl('/profile');

}
onClose(){
  this.dialog.closeAll();
}
}
