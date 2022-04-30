import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TopicService } from 'src/app/Services/_bak/topic.service';
import { AuthentificationService } from '../../../Services/_auth/authentification.service';

@Component({
  selector: 'app-anglais',
  templateUrl: './anglais.component.html',
  styleUrls: ['./anglais.component.scss']
})
export class AnglaisComponent implements OnInit {
  categ?:any;
  lesson='lesson';
  Blog='blog';
  Td='td';
  user:any
  role:any
  constructor(private router:ActivatedRoute,private _authServ:AuthentificationService,private service:TopicService,private route:Router) { }

  ngOnInit(): void {

this.categ=this.router.routeConfig?.path
this.service.getnode().subscribe(
  node =>{
         this.service.addNode(this.categ)
        },
  err =>{
          console.log(err)
  })
  if(this._authServ.isLoggedIn()){
    this._authServ.getUserProfile().subscribe(
   (res:any)=>{ this.user=res; 
    this.role=this.user.user.Roles;
  }) }        
  }
  AddLesson(event:any){this.route.navigate(['bak1/addSubject',{lssn:this.lesson}])}
  AddBlog(event:any){ this.route.navigate(['bak1/addSubject',{blg:this.Blog}])}
  AddTd(event:any){ this.route.navigate(['bak1/addSubject',{td:this.Td}])}
    
}
