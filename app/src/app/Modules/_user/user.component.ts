import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/Services/_auth/authentification.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private router:Router,public _auth:AuthentificationService) { }
navLinks=[
  { path:'profile',label:'PROFILE'},
  { path:'register',label:'REGISTER'},
]
  ngOnInit(): void {
  }


}
