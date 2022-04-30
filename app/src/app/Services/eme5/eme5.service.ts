import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { take } from 'rxjs/operators';
import { lisson } from 'src/app/Classes/lissons';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Eme5Service {

  constructor(private http:HttpClient) { }

  private node:Subject<any>=new BehaviorSubject<any>([])
  getnode(){
    return this.node.asObservable().pipe(take(1))
  }
  addNode(data:Node){
     this.node.next(data)
  }
  AddSubject(data:any){
    return this.http.post(environment._urlBase +'eme5/addBlog',data);
  }
  AddLisson(data:any){
    return this.http.post(environment._urlBase + 'eme5/addlisson',data);
  }
  ListCourses(categ:any){
    return this.http.get(environment._urlBase + 'eme5/listLissons/'+`${categ}`);
  }
  addImage(image:File,id:any){
    const data=new FormData();
    data.append('image',image);
    data.append('id',id);
     return this.http.post(environment._urlBase + 'eme5/addImage',data);
  }
  // add tds 
  addTd(data:any){
    return this.http.post(environment._urlBase +'eme5/addTd',data);
  }
  addImageTd(image:File,id:any){
    const data=new FormData();
    data.append('image',image);
    data.append('id',id);
    console.log(data.get('id'))
    return this.http.post(environment._urlBase + 'eme5/addTdImage',data)
  }
  // module 
  addModule(data:any){
    
    return this.http.post(environment._urlBase + 'eme5/addModule',data)
  }
  addPdfFile(pdf:File,id:any){
    const data=new FormData();
    data.append('image',pdf);
    data.append('id',id);
    console.log(data.get('image'))
    console.log(data.get('id'))
     return this.http.post(environment._urlBase + 'eme5/addPdf',data);
  }

  SearchOnLesson(title:any){
    return this.http.get(environment._urlBase +'eme5/Search/'+`${title}`);
  }

}
