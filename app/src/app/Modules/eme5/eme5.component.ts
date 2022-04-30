import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eme5',
  templateUrl: './eme5.component.html',
  styleUrls: ['./eme5.component.scss']
})
export class Eme5Component implements OnInit {

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
