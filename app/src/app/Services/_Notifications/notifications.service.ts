import { Injectable } from '@angular/core';
import { MatSnackBar,MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private snackbar:MatSnackBar) { }

congif:MatSnackBarConfig ={
  duration:4000,
  horizontalPosition:'right',
  verticalPosition:'bottom',
}
success(msg:string){
  this.congif['panelClass']=['notification','success'];
  this.snackbar.open(msg,'',this.congif);
}

warn(msg:string){
  this.congif['panelClass']=['notification','warn'];
  this.snackbar.open(msg,'',this.congif);
}








}
