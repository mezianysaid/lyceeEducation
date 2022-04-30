import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from './Layouts/default/_material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './Layouts/default/auth/auth.guard';
import { AuthInterceptor } from './Layouts/default/auth/auth.interceptor';
import { AuthentificationService } from './Services/_auth/authentification.service';
import { MainNavComponent } from './Shared/_components/main-nav/main-nav.component';
import { Bak1Component } from './Modules/bak1/bak1.component';
import { Bak2Component } from './Modules/bak2/bak2.component';
import { MathComponent } from './Modules/bak1/math/math.component';
import { PhysiqueComponent } from './Modules/bak1/physique/physique.component';
import { SvtComponent } from './Modules/bak1/svt/svt.component';
import { TDComponent } from './Modules/bak1/math/td/td.component';
import { CoursComponent } from './Modules/bak1/math/cours/cours.component';
import { FormSubjectComponent } from './Modules/bak1/form-subject/form-subject.component';
import { TopicService } from './Services/_bak/topic.service';
import { AnglaisComponent } from './Modules/bak1/anglais/anglais.component';
import { PhilosophyComponent } from './Modules/bak1/philosophy/philosophy.component';
import { Philosophybak2Component } from './Modules/bak2/philosophybak2/philosophybak2.component';
import { Anglaisbak2Component } from './Modules/bak2/anglaisbak2/anglaisbak2.component';
import { Svtbak2Component } from './Modules/bak2/svtbak2/svtbak2.component';
import { Physiquebak2Component } from './Modules/bak2/physiquebak2/physiquebak2.component';
import { Mathbak2Component } from './Modules/bak2/mathbak2/mathbak2.component';
import { BakService } from './Services/bak2/bak.service';
import { Formbak2Component } from './Modules/bak2/formbak2/formbak2.component';
import { Coursbak2Component } from './Modules/bak2/coursbak2/coursbak2.component';
import { Tdsbak2Component } from './Modules/bak2/tdsbak2/tdsbak2.component';
import { Eme5Component } from './Modules/eme5/eme5.component';
import { Eme5Service } from './Services/eme5/eme5.service';
import { LogindialogComponent } from './Layouts/default/logindialog/logindialog.component';

import { EditorModule } from 'primeng/editor';
// import { AngularFireModule } from 'angularfire2';
// import { AngularFireDatabaseModule} from '@angular/fire/database'
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
  // apiKey: "AIzaSyArCOxqRB2CUnEfQPu-VB__9JMH3t0fWmE",
  // authDomain: "lyceeducation-14c6c.firebaseapp.com",
  // databaseURL: "https://lyceeducation-14c6c-default-rtdb.firebaseio.com",
  // projectId: "lyceeducation-14c6c",
  // storageBucket: "lyceeducation-14c6c.appspot.com",
  // messagingSenderId: "817685702423",
  // appId: "1:817685702423:web:285a11f1aa13b956c7f952",
  // measurementId: "G-86K2K8JG0B"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
@NgModule({
  declarations: [
    AppComponent, 
    routingComponents,
    MainNavComponent,
    Bak1Component,
    Bak2Component,
    MathComponent,
    PhysiqueComponent,
    SvtComponent,
    TDComponent,
    CoursComponent,
    FormSubjectComponent,
    AnglaisComponent,
    PhilosophyComponent,
    Philosophybak2Component,
    Anglaisbak2Component,
    Svtbak2Component,
    Physiquebak2Component,
    Mathbak2Component,
    Formbak2Component,
    Coursbak2Component,
    Tdsbak2Component,
    Eme5Component,
    LogindialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    MaterialModule,
    LayoutModule,
    EditorModule,
    //  AngularFireModule.initializeApp(firebaseConfig),
    //  AngularFireDatabaseModule,
  ],
  entryComponents:[
    LogindialogComponent
  ],
  providers:[ 
    { provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true},
    AuthentificationService,
    AuthGuard,
    TopicService,
    BakService,
    Eme5Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
