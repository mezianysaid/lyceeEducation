import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Eme5Service } from 'src/app/Services/eme5/eme5.service';
import { AuthentificationService } from '../../../Services/_auth/authentification.service';
import { User } from '../../../Classes/User.model';

@Component({
  selector: 'app-anglais5eme',
  templateUrl: './anglais5eme.component.html',
  styleUrls: ['./anglais5eme.component.scss']
})
export class Anglais5emeComponent implements OnInit {
  categ: any;
  lesson='lesson';
  Blog='blog';
  Td='td'
  user: any
  role:any 
  constructor(private router:ActivatedRoute,private _authServ:AuthentificationService,private service:Eme5Service,private route:Router) { }

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
         (res:any)=>{ this.user=res as User[]; 
          this.role=this.user.user.Roles;
        }) 
      }        
  }

  AddLesson(event:any){
    this.route.navigate(['eme5/addBlog',{lssn:this.lesson}])
  }
  AddBlog(event:any){ this.route.navigate(['eme5/addBlog',{blg:this.Blog}])}
  AddTd(event:any){ this.route.navigate(['eme5/addBlog',{td:this.Td}])}
  
}
