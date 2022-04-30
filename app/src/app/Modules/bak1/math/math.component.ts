import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TopicService } from 'src/app/Services/_bak/topic.service';
import { AuthentificationService } from '../../../Services/_auth/authentification.service';



@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.scss']
})
export class MathComponent implements OnInit {
   msg?:String
   categ?:any
   data?:any
   node?:Node
   lesson='lesson';
   Blog='blog';
   Td='td';
   user:any
   role:any
  constructor( public router:ActivatedRoute, private _authServ:AuthentificationService,public route:Router , private service:TopicService) { }
  ngOnInit(): void {
    // this.recieveMsg(this.msg)
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
      }) }        
  }

  // show(){
    // this.route.navigate(['bak1/math/cours'],{this.categ})

  // }
  AddLesson(event:any){this.route.navigate(['bak1/addSubject',{lssn:this.lesson}])}
  AddBlog(event:any){ this.route.navigate(['bak1/addSubject',{blg:this.Blog}])}
  AddTd(event:any){ this.route.navigate(['bak1/addSubject',{td:this.Td}])}
    

}
