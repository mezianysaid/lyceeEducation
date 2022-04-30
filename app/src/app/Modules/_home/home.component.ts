import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthentificationService } from 'src/app/Services/_auth/authentification.service';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          // { title: 'Card 2', cols: 1, rows: 1 },
          // { title: 'Card 3', cols: 1, rows: 1 },
          // { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        // { title: 'Card 2', cols: 1, rows: 1 },
        // { title: 'Card 3', cols: 1, rows: 2 },
        // { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver,
    private _auth:AuthentificationService) {}

    chartOptions?: {};
    // HighCharts=Highcharts;
  ngOnInit(){
    this.chartOptions = {
           chart: { type: 'area'},
            title: { text:'chart'},
            subtitle: {text:'source wikipidia'},
            xAxis:{ 
              categories:['2010','2011','2012','2013','2019','2020'],
              tickmarkPlacement:'on',
              title:{enable:false}
            },
            yAxis:{
              title:{ text:'Billions'}
            }

    }
  }
  // getImages(){
    // this._auth.getImage().subscribe((res:any)=>{
      // this.dataImage=res;
      // console.log(res);
    // });
  // }
// onSelect(event: any){
  // console.log("yes")
  // const file=(event.target as HTMLInputElement).files?.item(0)
  // this.form.patchValue({image:file});
  // const allowedMimeTypes=["image/jpg","image/png","image/jpeg"];
  // if(file && allowedMimeTypes.includes(file.type) ){
    // const reader=new FileReader();
    // reader.onload=()=>{
      // this.dataImage=reader.result as string;
    // }
    // reader.readAsDataURL(file); 
  // }
// }
  // onSubmit(){
    // console.log(this.form.value);
    // this._auth.addGallary(this.form.value.name,this.form.value.Fname,this.form.value.Lname,this.form.value.image).subscribe(res=>{
      // console.log(res);
    // })
    // this.form.reset();
    // this.dataImage='';
  // }


}
