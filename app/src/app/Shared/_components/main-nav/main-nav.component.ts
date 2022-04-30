import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SignInComponent } from 'src/app/Modules/_user/sign-in/sign-in.component';
import { AuthentificationService } from 'src/app/Services/_auth/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,private dialog:MatDialog, private _authServ:AuthentificationService ,private router:Router) {}

  onLogin(){
    // this._myService.initialeFormFiliere();
    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width='80%';
    this.dialog.open(SignInComponent,dialogConfig);
}
OnLogOut(){
 this._authServ.deleteToken();
   this.router.navigateByUrl('default');
}
}