import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { lisson } from 'src/app/Classes/lissons';
import { AuthentificationService } from 'src/app/Services/_auth/authentification.service';
import { TopicService } from 'src/app/Services/_bak/topic.service';

@Component({
  selector: 'app-td',
  templateUrl: './td.component.html',
  styleUrls: ['./td.component.scss']
})
export class TDComponent implements OnInit {
  blogs?:lisson[]
  Searchblogs?:lisson[]
  show=false;
  length?=0;
  searchKey='';
key='';
mod=''
td_id:any
  role: any;
  user: any;
  constructor(public service:TopicService,private _authServ:AuthentificationService,public sanitizer: DomSanitizer) { }
  
  ngOnInit(): void {        
    if(this._authServ.isLoggedIn()){
      this._authServ.getUserProfile().subscribe(
     (res:any)=>{ this.user=res; 
      this.role=this.user.user.Roles;
    }) 
     }
  this.service.getnode().subscribe(n =>{
    this.mod=n
  this.getListeBlogs(n)})
   
  }
   
  getListeBlogs(mod:any){
    this.service.ListCourses(mod).subscribe((res:any)=>{
      this.blogs=res as lisson[]
      // console.log(this.blogs)
    })
  }

  showDivAdd(id:any){
    this.td_id=id
    if(this.show==false) this.show=true
    else this.show=false
  }
  addImage(id:any){
    console.log(id)
    if(this.service.formGallery.value){
   this.service.addImageTd(this.service.formGallery.get('filename')?.value,id).subscribe(()=>{
     this.getListeBlogs(this.mod)
   });
   this.show=false
  }
}


SearchByTitle(){
  this.key=this.searchKey.trim().toLowerCase();
  // console.log(this.key);
  this.service.SearchOnLesson(this.key).subscribe( res=>{
    this.Searchblogs=res as lisson[]
  });
}
onsearchClear(){
  this.searchKey="";
  this.SearchByTitle();
}


}
