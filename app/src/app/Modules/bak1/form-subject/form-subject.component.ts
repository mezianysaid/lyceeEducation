import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lisson } from 'src/app/Classes/lissons';
import { subject } from 'src/app/Classes/subject';
import { TopicService } from 'src/app/Services/_bak/topic.service';
import { NotificationsService } from '../../../Services/_Notifications/notifications.service';

@Component({
  selector: 'app-form-subject',
  templateUrl: './form-subject.component.html',
  styleUrls: ['./form-subject.component.scss']
})
export class FormSubjectComponent implements OnInit {
  lissons?: lisson[];
  coursSelected!:string;
  blogs?: subject[];
  Mselected?:string;
  Mselect='';
  Sselected?:string
  len: any;
  mod: any='math'
  msgalert: any=''
  coursalert: any=''
  tdalert: any=''
  SelectLesson='';
  SelectBlog='';
  text!: string;
  SelectTd='';
  pathRoute='';
  paths=[
    { name:'Mathematique',codeM:'math'},
    {name:'Physique',codeM:'physique'},
    {name:'Svt',codeM:'svt'},
    {name:'Anglais',codeM:'anglais'},
    {name:'philosophy',codeM:'philosophy'},
  ]
  constructor(public _service:TopicService,private _notifi:NotificationsService,private router:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {     
   this._service.getnode().subscribe(n =>{
    this.pathRoute=n 
   this.getCourses(n);})
   this.SelectLesson=this.router.snapshot.params.lssn
   this.SelectBlog=this.router.snapshot.params.blg
   this.SelectTd=this.router.snapshot.params.td
       
  }
  onSubmit(){
    if(this._service.formSubject.valid){
      // console.log(this._service.formSubject.value)
      this._service.AddSubject(this._service.formSubject.value).subscribe(()=>{
        this.getCourses(this.pathRoute)
      });
      this._notifi.warn('the blog  has been added succesfully !')
    }
    this._service.formSubject.reset();
    this.route.navigate(['bak1/'+this.pathRoute+'/cours'])
  }

  
  AddLisson(event:any){
    if(this._service.formcours.valid){
      this._service.AddLisson(this._service.formcours.value).subscribe(()=>{
         this.getCourses(this.pathRoute)
      });
       this._notifi.success('the blog  has been added succesfully !')
       
    }
    // this.clear()
    this._service.formcours.reset()
    this.route.navigate(['bak1/'+this.pathRoute+'/cours'])
  }
  clear(){
    this._service.InitFormCours();
  }
  clearModule(){
    this._service.formModule.reset()
  }

  getCourses(mod:any){
    this._service.ListCourses(mod).subscribe(res=>{
      this.lissons=res as lisson[]
      // console.log(this.lissons)
    })
  }

  AddTd(){
    if(this._service.formTd.valid){
    this._service.addTd(this._service.formTd.value).subscribe(()=>{
       this.getCourses(this.pathRoute)
    });
    this._notifi.success('the blog td has been added succesfully !')
  }
  this._service.formTd.reset();
  this.route.navigate(['bak1/'+this.pathRoute+'/td'])
}
}
