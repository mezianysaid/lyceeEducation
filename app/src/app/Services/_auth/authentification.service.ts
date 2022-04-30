import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Classes/User.model';
import { environment } from '../../../environments/environment';
import { BehaviorSubject, Observable ,throwError } from 'rxjs';
import { catchError, map,} from 'rxjs/operators'

// import {HttpErrorHandler} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class AuthentificationService {
  // public isAuthenticated=new BehaviorSubject<boolean>(false);
// create form sign up 
formUser: FormGroup=new FormGroup({
  _id:new FormControl(null),
  fullName:new FormControl('',[Validators.required]),
  email:new FormControl('',[Validators.required,Validators.email]),
  password:new FormControl('',[Validators.required,Validators.minLength(4)]),
  Confirmpassword:new FormControl('',[Validators.required,Validators.minLength(4)]),
  Roles:new FormControl('',[Validators.required]),
  idAdmin:new FormControl(''),
  __v:new FormControl(0),
});
//create form Login
formSignIn: FormGroup =new FormGroup({
  _id:new FormControl(null),
  email:new FormControl('',[Validators.required,Validators.email]),
  password:new FormControl('',[Validators.required,Validators.minLength(4)]),
  __v:new FormControl(0),
});
  pass: any;
  confirmpass: any;
  ErrorMsg!: string;
  isAuthenticated=false;
  
  formImages:FormGroup =new FormGroup({
    filename:new FormControl('',[Validators.required])
  })
initialeFormUser(){
  this.formUser.setValue({
    _id:'',
    fullName:'',
    email:'',
    password:'',
    Confirmpassword:'',
    Roles:'',
    idAdmin:'',
    __v:0,
  });
  };
  // private handleError:HandleError;
  constructor(private http:HttpClient,private route: Router) {}
  readonly url='http://localhost:3100/api/uploads/';
  NoauthHeader={headers:new HttpHeaders({'NoAuth':'True'})}
  roles:[]=[]
  ngOnInit(){
    
  }
  ///
  getImage(){
    return this.http.get(this.url);
  }
//http methods
   public RegisterUser(fullName:any,email:any,password:any,Roles:any,idAdmin:any){
    const data=new FormData();
    data.append("fullName", fullName);
    data.append("email", email);
    data.append("password",password);
    data.append("Roles",Roles);
    data.append("idadmin",idAdmin);
    return this.http.post(environment._urlBase + 'user/register',data);
   }

   Login(authCredentials:any):Observable<{}>{
      return this.http.post(environment._urlBase +'user/Authenticate',authCredentials,this.NoauthHeader);
                          //  map((res: HttpResponse) =>{
                            //  return res;
                          //  })).pipe(catchError(err=>this.errorHandler.errorHand(err)));
   }
   errorHand(error:HttpErrorResponse){
     let errMessage='';
     if(error){
       try{
         //error.error holds the json respone from api
         errMessage=JSON.stringify(error.error);
       }catch(error){
         errMessage=error.statusText;
       }
       return throwError(errMessage || error || 'Server error');
     }
     return throwError(errMessage || error || 'Server error');
   }
   CkeckConfPass(pass:string,confirmpass:string):any{
        if(pass != confirmpass){
        this.ErrorMsg="PASSWORDS DOES NOT MATCH !";
        }
      return this.ErrorMsg;
   }
   getUserProfile(){
    return this.http.get(environment._urlBase +'user/details');
   }
//helper methods
   setToken(token:any){
     localStorage.setItem('token',token);
   }
   getToken(){
     return localStorage.getItem('token')
   }
   deleteToken(){
     localStorage.removeItem('token');
   }
   getUserPayLoad(){
     var token = this.getToken();
     if(token){
        var userpayload= atob(token.split('.')[1]);
        return JSON.parse(userpayload);
     }else { return null;}
   }
   isLoggedIn(){
     var userPayload=this.getUserPayLoad();
     if(userPayload){
       this.isAuthenticated=true;
      //  this.isAuthenticated.asObservable();
        return userPayload.exp > Date.now() / 1000;
     }else {
     this.isAuthenticated=false;
       return false;
     }

   }
    getRoleUser(){
      return this.formUser.get('Roles');
    }
    ListRoles():any{
    //  return this.roles.push(Role['Admin'])
    }
    getListUsers(){
    return this.http.get(environment._urlBase +'user/listUsers');
    }
    populateForm(user:any){
      this.formUser.setValue(user);
    }
    //update user
    updateUser(user:User,id:any){
      return this.http.put(environment._urlBase + 'user/lUser/'+`${id}`,user);
    }
   // delete
    SupprimeUser(id:any){
      return this.http.delete(environment._urlBase +'user/Delete/'+`${id}`);
    }
  // UPDATE IMAGE OF PROFILE
  UpdateImage(id:any,image:File){
    const data=new FormData();
    data.append("image", image);
    return this.http.put(environment._urlBase + 'user/upImage/'+`${id}`,data);
  }
  addImage(image:File,id:any){
    const data=new FormData();
    data.append('image',image);
    data.append('id',id);
     return this.http.post(environment._urlBase + 'user/addImage',data);
  }
}
