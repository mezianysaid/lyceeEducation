import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Classes/User.model';
import { AuthentificationService } from 'src/app/Services/_auth/authentification.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public userDetails?:any;
  user: any;
  usr!:any
  show:Boolean=false;
  path?:String;
  msg=''
  role=''
  email=''
  fullname=''
  constructor(public UserService:AuthentificationService,private router:Router){}


  ngOnInit(): void {
    
  this.getUserInfor()                    
    
  }
  getUserInfor(){
    this.UserService.getUserProfile().subscribe(res=>{
      this.usr=res as User[];     
      this.userDetails=this.usr.user;
      this.path=this.userDetails.image.filename
      this.role=this.userDetails.Roles
      this.fullname=this.userDetails.fullName
      this.email=this.userDetails.email
 });
  }
 onLogout(){
  this.UserService.deleteToken();
  this.router.navigateByUrl('default');
  }
  ShowDivUpdate(){
   if(this.show==false){this.show=true;}
   else{this.show=false}
  }
  onSubmit(){
   this.UserService.addImage(this.UserService.formImages.get('filename')?.value,this.userDetails._id).subscribe((res:any)=>{
    this.getUserInfor();
  })
   this.show=false;
  //  this.router.navigateByUrl('users/list_users')

   this.msg="the image added succesfully"
 }



}
