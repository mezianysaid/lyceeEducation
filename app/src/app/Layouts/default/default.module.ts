import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './_material/material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthentificationService } from 'src/app/Services/_auth/authentification.service';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { SignUpComponent } from 'src/app/Modules/_user/sign-up/sign-up.component';
import { UserComponent } from 'src/app/Modules/_user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogindialogComponent } from './logindialog/logindialog.component';

@NgModule({
  declarations: [
  
  LogindialogComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
FormsModule,
ReactiveFormsModule,
  ],
  entryComponents:[UserComponent,SignUpComponent],
  providers:[ { provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true},AuthentificationService,AuthGuard],
  exports: [
    // DefaultComponent,
  ],
  
})
export class DefaultModule { }
