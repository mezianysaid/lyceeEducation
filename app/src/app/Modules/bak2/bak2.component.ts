import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bak2',
  templateUrl: './bak2.component.html',
  styleUrls: ['./bak2.component.scss']
})
export class Bak2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  paths=[
    {path:'math',label:'Mathematique'},
    {path:'physique',label:'Physique'},
    {path:'svt',label:'Svt'},
    {path:'anglais',label:'Anglais'},
    {path:'philosophy',label:'Philosophie'},
   ]
}
