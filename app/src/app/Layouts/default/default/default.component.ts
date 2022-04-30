import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LogindialogComponent } from '../logindialog/logindialog.component';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  
  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {   
    this.showdialog()                 
  }
   showdialog(){
    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width='80%';
     this.dialog.open(LogindialogComponent,dialogConfig);
   }
}
