import { BakService } from '../../../Services/bak2/bak.service';
import { Component, OnInit } from '@angular/core';
import { lisson } from 'src/app/Classes/lissons';
import { TopicService } from 'src/app/Services/_bak/topic.service';
import { AuthentificationService } from 'src/app/Services/_auth/authentification.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-tdsbak2',
  templateUrl: './tdsbak2.component.html',
  styleUrls: ['./tdsbak2.component.scss']
})
export class Tdsbak2Component implements OnInit {
  show=false
  blogs?:lisson[]
  Searchlessons?:lisson[]=[]
  searchKey='';
  key='';
  module:any
  td_id:any
  constructor(public service:BakService,public serviceForms:TopicService,private _authServ:AuthentificationService,public sanitizer: DomSanitizer) { }
   user:any 
   role:any
  ngOnInit(): void {
    if(this._authServ.isLoggedIn()){
      this._authServ.getUserProfile().subscribe(
     (res:any)=>{ this.user=res; 
      this.role=this.user.user.Roles;
    }) 
  }
    this.service.getnode().subscribe(n =>{
      this.module=n
      this.getListeBlogs(n)})
       
  }
    
  getListeBlogs(mod:any){
    this.service.ListCourses(mod).subscribe((res:any)=>{
      this.blogs=res as lisson[]
      console.log(this.blogs)
    })
  }

  showDivAdd(id:any){
    this.td_id=id
    if(this.show==false) this.show=true
    else this.show=false
  }
  addImage(id:any){
    console.log(id)
    if(this.serviceForms.formGallery.value){
   this.service.addImageTd(this.serviceForms.formGallery.get('filename')?.value,id).subscribe(()=>{
     this.getListeBlogs(this.module)
   });
   this.show=false
  }
}
SearchByTitle(){
  this.key=this.searchKey.trim().toLowerCase();
  // console.log(this.key);
  this.service.SearchOnLesson(this.key).subscribe( res=>{
    this.Searchlessons=res as lisson[]
  });
}
onsearchClear(){
  this.searchKey="";
  this.SearchByTitle();
}

}
