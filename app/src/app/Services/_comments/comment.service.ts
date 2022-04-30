import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup ,FormControl, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor( private _http:HttpClient) { }
// CREATE COMMENT FORM 
formComment:FormGroup=new FormGroup({
  Comment:new FormControl('',[Validators.required,Validators.minLength(3)]),
});

// INITIALIZE THE FORMS

InitializeForm(){
  this.formComment.setValue({
    Comment:''
  })
}

// ADD NEW COMMENT

AddComment(id:any,data:any){
   return this._http.post(environment._urlBase+'comment/Add/'+`${id}`,data);
}

// FETCH ALL COMMENTS

ListOfComments(){
  return this._http.get(environment._urlBase + 'comment/list');
}

// DELETE COMMENT

DeleteComment(id:any){
  return this._http.delete(environment._urlBase + 'comment/Delete/'+`${id}`);
}



}
