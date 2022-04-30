import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { lisson } from 'src/app/Classes/lissons';
import { User } from 'src/app/Classes/User.model';
import { BakService } from 'src/app/Services/bak2/bak.service';
import { AuthentificationService } from 'src/app/Services/_auth/authentification.service';
import { TopicService } from 'src/app/Services/_bak/topic.service';
import { NotificationsService } from '../../../Services/_Notifications/notifications.service';

@Component({
  selector: 'app-coursbak2',
  templateUrl: './coursbak2.component.html',
  styleUrls: ['./coursbak2.component.scss']
})
export class Coursbak2Component implements OnInit {
  courses?:lisson[]
  
  show=false;
  showpdf=false;
  module?:any
  Searchlessons?:lisson[]=[]
  searchKey='';
  key='';
  blg_id:any
  constructor(public service:BakService,private _authServ:AuthentificationService,public sanitizer: DomSanitizer,
    public serviceForms:TopicService,private _notifi:NotificationsService,private route:Router) { }
  role:any;
  user?:any
  ngOnInit(): void {
    if(this._authServ.isLoggedIn()){
      this._authServ.getUserProfile().subscribe(
     (res:any)=>{ this.user=res; 
      this.role=this.user.user.Roles;
    }) 
  }
    this.service.getnode().subscribe(n =>{
      this.module=n
    this.getListLissons(n)
    })
  }
  
  getListLissons(mod:any){
    this.service.ListCourses(mod).subscribe(res=>{
      this.courses=res as lisson[]
      // console.log(this.courses)
    })
  }

  showDivAdd(id:any){
    this.blg_id=id
    if(this.show==false) this.show=true
    else this.show=false
  }
  addImage(id:any){
   console.log(this.serviceForms.formGallery.value,id)
   this.service.addImage(this.serviceForms.formGallery.get('filename')?.value,id).subscribe(()=>{
    this.getListLissons(this.module)
   });
   this.serviceForms.formGallery.reset()
   this.show=false
   this._notifi.success("the image has been added successfully ")
  }

  RouteToTd(){
    this.route.navigate(['bak2/'+this.module+'/td'])
  }
showPdfForm(id:any){
  this.blg_id=id
  if(this.showpdf==false) { this.showpdf=true}
  else{ this.showpdf=false}
}
AddPdf(id:any){
   if(this.serviceForms.formPdf.valid){
    //  console.log(this.service.formPdf.get('pdfname')?.value,id);
     this.service.addPdfFile(this.serviceForms.formPdf.get('pdfname')?.value,id).subscribe(res=>{
      this.getListLissons(this.module)
     });
     this.serviceForms.formPdf.reset();
     this.showpdf=false;
     this._notifi.success("the Pdf file has been added successfully ")     
   }
}
Downloadfile(FileUrl:any){
  const link = document.createElement('a');
  // link.setAttribute('target', '_self');
  link.setAttribute('href',FileUrl );
  link.setAttribute('download', FileUrl);
  document.body.appendChild(link);
  link.click();
  link.remove();
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
