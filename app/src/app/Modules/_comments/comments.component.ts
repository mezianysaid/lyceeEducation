
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Classes/User.model';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/Services/_auth/authentification.service';
import { CommentService } from 'src/app/Services/_comments/comment.service';
import { NotificationsService } from 'src/app/Services/_Notifications/notifications.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  // comment: void;
  user!:any;
  User?:any
  detail?:any;
  list_comments?: any;
  // list_replies?: any;
  nb?:number;
  // user_id:any;
  detail_id:any;
  constructor(public _commentService:CommentService,private _authServ:AuthentificationService,private router:Router
     ,private _notif:NotificationsService,public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    if(this._authServ.isLoggedIn()){
      this._authServ.getUserProfile().subscribe(
     (res:any)=>{ this.user=res as User[]; 
      this.detail=this.user.user;
      this.detail_id=this.detail._id;
    }) 
    }
   
    ///// 
    this.getListComments();
    // this.getListReplies();
  }
// get List of comments
getListComments(){
    this._commentService.ListOfComments().subscribe((res:any)=>{ 
      this.list_comments=res;        
    })
}
//////******************************************* */ */
onCreate(){
  if(this._commentService.formComment.valid ){
    if(this._commentService.formComment.value !=null) {
        this._commentService.AddComment(this.detail._id,this._commentService.formComment.value).subscribe((res:any)=>{         
          this._notif.success(res);
          this.getListComments();         
        });
        this._commentService.formComment.reset();
        // this.router.navigateByUrl('/comments');
 
    }else {
    this._notif.warn('THE COMMENT CAN NOT BE EMPTY');

    }
  }
 
}





}
