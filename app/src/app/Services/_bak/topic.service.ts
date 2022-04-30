import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
import { lisson } from 'src/app/Classes/lissons';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TopicService {
   subj!:Subject<any>

  constructor(public http:HttpClient) { }
  private node:Subject<any>=new BehaviorSubject<any>([])
 getnode(){
   return this.node.asObservable().pipe(take(1))
 }
 addNode(data:Node){
    this.node.next(data)
 }
// form for add blogs
formSubject:FormGroup=new FormGroup({
    _id:new FormControl(),
    cours:new FormControl('',[Validators.required]),
    title:new FormControl('',[Validators.required]),  
    description:new FormControl(),
  })
//   form for add images
formGallery:FormGroup=new FormGroup({
  _id:new FormControl(null),
  filename:new FormControl('',[Validators.required]),
})
// form for add lissons
formcours:FormGroup=new FormGroup({
  _id:new FormControl(null),
  lisson:new FormControl('',[Validators.required]),
  modole:new FormControl('',[Validators.required]),
})
// form of Tds

formTd:FormGroup=new FormGroup({
  _id:new FormControl(null),
  title:new FormControl('',[Validators.required]),
  description:new FormControl('',[Validators.required]),
  cours:new FormControl('',[Validators.required]),
})

// form for module 
formModule:FormGroup=new FormGroup({
  name:new FormControl('',[Validators.required]),
  codeM:new FormControl('',[Validators.required])
})
// form for th pdf file
formPdf:FormGroup=new FormGroup({
  pdfname:new FormControl('',[Validators.required]),
})
 InitFormCours(){
   this.formcours.setValue({
    _id:null,
    lisson:'',
    modole:''
    })
 }
 stream?:Observable<any>
 
  AddSubject(data:any){
    return this.http.post(environment._urlBase +'subject/addBlog',data);
  }

  AddLisson(data:any){
    return this.http.post(environment._urlBase + 'subject/addlisson',data);
  }

  ListCourses(categ:any){        
      return this.http.get(environment._urlBase + 'subject/listLissons/' + `${categ}`);
  }

  addImage(image:File,id:any){
    const data=new FormData();
    data.append('image',image);
    data.append('id',id);
    return this.http.post(environment._urlBase + 'subject/addImage',data);    
  }

  // add tds 
  addTd(data:any){
    return this.http.post(environment._urlBase +'subject/addTd',data);
  }
  addImageTd(image:File,id:any){
    const data=new FormData();
    data.append('image',image);
    data.append('id',id);
    console.log(data.get('id'))
    return this.http.post(environment._urlBase + 'subject/addTdImage',data)
  }
  // module 
  addModule(data:any){
    
    return this.http.post(environment._urlBase + 'subject/addModule',data)
  }

  addPdfFile(pdf:File,id:any){
    const data=new FormData();
    data.append('image',pdf);
    data.append('id',id);
    console.log(data.get('image'))
    console.log(data.get('id'))
     return this.http.post(environment._urlBase + 'subject/addPdf',data);
  }

  SearchOnLesson(title:any){
    return this.http.get(environment._urlBase +'subject/Search/'+`${title}`);
  }
}
