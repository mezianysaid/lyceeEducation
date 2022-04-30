import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { subject } from 'src/app/Classes/subject';
import { TopicService } from 'src/app/Services/_bak/topic.service';
import { NotificationsService } from 'src/app/Services/_Notifications/notifications.service';
import { Eme5Service } from '../../../Services/eme5/eme5.service';
import { lisson } from '../../../Classes/lissons';
import { AuthentificationService } from 'src/app/Services/_auth/authentification.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-cours5eme',
  templateUrl: './cours5eme.component.html',
  styleUrls: ['./cours5eme.component.scss']
})
export class Cours5emeComponent implements OnInit {
  courses?:lisson[]
  show=false;
  showpdf=false;
  module?:any
  blg:any="blog"
  Searchlessons?:lisson[]=[]
  searchKey='';
  key='';
  blg_id:any
  role: any;
  user: any;
  constructor(public service:Eme5Service,private _authServ:AuthentificationService,public sanitizer: DomSanitizer,
    public serviceForms:TopicService,private _notifi:NotificationsService,private route:Router) { }

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
      console.log(this.courses)
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
    this.route.navigate(['eme5/'+this.module+'/td'])
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

  RoutTo(){    
    this.route.navigate(['eme5/addBlog',{data:this.blg}])
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
