import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Eme5Service } from 'src/app/Services/eme5/eme5.service';
import { AuthentificationService } from '../../../Services/_auth/authentification.service';

@Component({
  selector: 'app-philosophy5eme',
  templateUrl: './philosophy5eme.component.html',
  styleUrls: ['./philosophy5eme.component.scss']
})
export class Philosophy5emeComponent implements OnInit {
  categ:any
  lesson='lesson';
Blog='blog';
Td='td';
user:any;
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
         (res:any)=>{ this.user=res; 
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
