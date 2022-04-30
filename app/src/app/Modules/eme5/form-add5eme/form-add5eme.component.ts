import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lisson } from 'src/app/Classes/lissons';
import { subject } from 'src/app/Classes/subject';
import { Eme5Service } from 'src/app/Services/eme5/eme5.service';
import { TopicService } from 'src/app/Services/_bak/topic.service';
import { NotificationsService } from 'src/app/Services/_Notifications/notifications.service';

@Component({
  selector: 'app-form-add5eme',
  templateUrl: './form-add5eme.component.html',
  styleUrls: ['./form-add5eme.component.scss']
})
export class FormAdd5emeComponent implements OnInit {
  lissons?: lisson[];
  coursSelected!:string;
  blogs?: subject[];
  Mselected?:string;
  Mselect='';
  Sselected?:string;
  SelectLesson='';
  SelectBlog='';
  SelectTd='';
  pathRoute='';
  paths=[
    { name:'Mathematique',codeM:'math'},
    {name:'Physique',codeM:'physique'},
    {name:'Svt',codeM:'svt'},
    {name:'Anglais',codeM:'anglais'},
    {name:'philosophy',codeM:'philosophy'},
  ]
  constructor(public _service:Eme5Service,public serviceForms:TopicService,private router:ActivatedRoute,private _notifi:NotificationsService,private route:Router) { }

  ngOnInit(): void {
    this._service.getnode().subscribe(n =>{ 
      this.pathRoute=n
      this.getCourses(n);})
      // console.log(this.router.snapshot.params.data)
      this.SelectLesson=this.router.snapshot.params.lssn
      this.SelectBlog=this.router.snapshot.params.blg
      this.SelectTd=this.router.snapshot.params.td
  }

  onSubmit(){
    if(this.serviceForms.formSubject.valid){
      this._service.AddSubject(this.serviceForms.formSubject.value).subscribe(()=>{
        this.getCourses(this.pathRoute)
      });
      this._notifi.warn('the blog  has been added succesfully !')
    }
    this.serviceForms.formSubject.reset();
    this.route.navigate(['eme5/'+this.pathRoute+'/cours'])
  }

  
  AddLisson(event:any){
    if(this.serviceForms.formcours.valid){
      this._service.AddLisson(this.serviceForms.formcours.value).subscribe(()=>{
        this.getCourses(this.pathRoute)
      });
       this._notifi.success('the blog  has been added succesfully !')
       this.route.navigate(['eme5/'+this.pathRoute+'/cours'])
    }
    // this.clear()
    this.serviceForms.formcours.reset()
  }
  clear(){
    this.serviceForms.InitFormCours();
  }
  clearModule(){
    this.serviceForms.formModule.reset()
  }
  getCourses(mod:any){
    this._service.ListCourses(mod).subscribe(res=>{
      this.lissons=res as lisson[]
      // console.log(this.lissons)
    })
  }

  AddTd(){
    if(this.serviceForms.formTd.valid){
    this._service.addTd(this.serviceForms.formTd.value).subscribe(()=>{
      this.getCourses(this.pathRoute)
    });
    this._notifi.success('the blog td has been added succesfully !')
  }
  this.serviceForms.formTd.reset();
  this.route.navigate(['eme5/'+this.pathRoute+'/td'])
}
}
