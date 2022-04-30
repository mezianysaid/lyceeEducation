import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BakService } from 'src/app/Services/bak2/bak.service';
import { AuthentificationService } from '../../../Services/_auth/authentification.service';

@Component({
  selector: 'app-anglaisbak2',
  templateUrl: './anglaisbak2.component.html',
  styleUrls: ['./anglaisbak2.component.scss']
})
export class Anglaisbak2Component implements OnInit {
   categ:any
   lesson='lesson';
   Blog='blog';
   Td='td';
   user:any;
   role:any;
  constructor(private router:ActivatedRoute,private _authServ:AuthentificationService,private service:BakService,private route:Router) { }

  ngOnInit(): void {
    this.categ=this.router.routeConfig?.path
     this.service.getnode().subscribe(
           node =>{
                this.service.addNode(this.categ)},
          err =>{
           console.log(err)
          })
          if(this._authServ.isLoggedIn()){
            this._authServ.getUserProfile().subscribe(
           (res:any)=>{ this.user=res; 
            this.role=this.user.user.Roles;
          }) 
        }        
  }
  AddLesson(event:any){this.route.navigate(['bak2/addBlog',{lssn:this.lesson}])}
  AddBlog(event:any){ this.route.navigate(['bak2/addBlog',{blg:this.Blog}])}
  AddTd(event:any){ this.route.navigate(['bak2/addBlog',{td:this.Td}])}
}
