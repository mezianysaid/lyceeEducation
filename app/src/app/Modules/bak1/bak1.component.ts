import { Component, EventEmitter, OnInit, Output,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TopicService } from 'src/app/Services/_bak/topic.service';

@Component({
  selector: 'app-bak1',
  templateUrl: './bak1.component.html',
  styleUrls: ['./bak1.component.scss']
})
export class Bak1Component implements OnInit {
  constructor(private router:ActivatedRoute,private service:TopicService) { }
 categ?:any
  ngOnInit(): void {
  }
  @Input() MsgEvent=new EventEmitter<String>();
   paths=[
    {path:'math',label:'Mathematique'},
    {path:'physique',label:'Physique'},
    {path:'svt',label:'Svt'},
    {path:'anglais',label:'Anglais'},
    {path:'philosophy',label:'Philosophie'},
   ]


}

