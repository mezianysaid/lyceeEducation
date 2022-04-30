import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-logindialog',
  templateUrl: './logindialog.component.html',
  styleUrls: ['./logindialog.component.scss']
})
export class LogindialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  paths=[
    {path:'login',label:'SIGN IN'},
    {path:'register',label:'SIGN UP'},
   ]
}
