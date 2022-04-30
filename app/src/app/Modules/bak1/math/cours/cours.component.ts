import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { lisson } from 'src/app/Classes/lissons';
import { AuthentificationService } from 'src/app/Services/_auth/authentification.service';
import { TopicService } from 'src/app/Services/_bak/topic.service';
import { subject } from '../../../../Classes/subject';
import { NotificationsService } from '../../../../Services/_Notifications/notifications.service';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.scss']
})
export class CoursComponent implements OnInit {
  courses?: lisson[];
  Searchlessons?: lisson[];
  blogs?:subject[]
  idImage: any;
  idselected?:String
  id?:any
  images!: Object;
  show=false;
  msg?:String
  module: any;
  showpdf:boolean=false;
  searchKey='';
  key='';
  blg_id:any
  role: any;
  user: any;
  constructor(public service:TopicService,private _authServ:AuthentificationService,public sanitizer: DomSanitizer
    ,private router:ActivatedRoute,public route:Router,private _notifi:NotificationsService) { }
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
  //  console.log(this.service.formGallery.value,id)
   this.service.addImage(this.service.formGallery.get('filename')?.value,id).subscribe(()=>{
     this.getListLissons(this.module)
   });
   this.service.formGallery.reset()
   this.show=false
   this._notifi.success("the image has been added successfully ")
  }

  RouteToTd(){
    this.route.navigate(['bak1/'+this.module+'/td'])
  }
showPdfForm(id:any){
  this.blg_id=id
  if(this.showpdf==false) { this.showpdf=true}
  else{ this.showpdf=false}
}
AddPdf(id:any){
   if(this.service.formPdf.valid){
    //  console.log(this.service.formPdf.get('pdfname')?.value,id);
     this.service.addPdfFile(this.service.formPdf.get('pdfname')?.value,id).subscribe(()=>{
      this.getListLissons(this.module)
     });
     this.service.formPdf.reset();
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
