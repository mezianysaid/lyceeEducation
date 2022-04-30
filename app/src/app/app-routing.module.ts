import { DefaultComponent } from './Layouts/default/default/default.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './Layouts/default/auth/auth.guard';
import { CommentsComponent } from './Modules/_comments/comments.component';
import { ProfileComponent } from './Modules/_user/profile/profile.component';
import { SignInComponent } from './Modules/_user/sign-in/sign-in.component';
import { SignUpComponent } from './Modules/_user/sign-up/sign-up.component';
import { UserComponent } from './Modules/_user/user.component';
import { HomeComponent } from './Modules/_home/home.component';
import { Bak1Component } from './Modules/bak1/bak1.component';
import { MathComponent } from './Modules/bak1/math/math.component';
import { PhysiqueComponent } from './Modules/bak1/physique/physique.component';
import { SvtComponent } from './Modules/bak1/svt/svt.component';
import { CoursComponent } from './Modules/bak1/math/cours/cours.component';
import { TDComponent } from './Modules/bak1/math/td/td.component';
import { FormSubjectComponent } from './Modules/bak1/form-subject/form-subject.component';
import { AnglaisComponent } from './Modules/bak1/anglais/anglais.component';
import { PhilosophyComponent } from './Modules/bak1/philosophy/philosophy.component';
import { Bak2Component } from './Modules/bak2/bak2.component';
import { Mathbak2Component } from './Modules/bak2/mathbak2/mathbak2.component';
import { Physiquebak2Component } from './Modules/bak2/physiquebak2/physiquebak2.component';
import { Svtbak2Component } from './Modules/bak2/svtbak2/svtbak2.component';
import { Anglaisbak2Component } from './Modules/bak2/anglaisbak2/anglaisbak2.component';
import { Philosophybak2Component } from './Modules/bak2/philosophybak2/philosophybak2.component';
import { Formbak2Component } from './Modules/bak2/formbak2/formbak2.component';
import { Coursbak2Component } from './Modules/bak2/coursbak2/coursbak2.component';
import { Tdsbak2Component } from './Modules/bak2/tdsbak2/tdsbak2.component';
import { Eme5Component } from './Modules/eme5/eme5.component';
import { Math5emeComponent } from './Modules/eme5/math5eme/math5eme.component';
import { Cours5emeComponent } from './Modules/eme5/cours5eme/cours5eme.component';
import { TDs5emeComponent } from './Modules/eme5/tds5eme/tds5eme.component';
import { Physique5emeComponent } from './Modules/eme5/physique5eme/physique5eme.component';
import { Svt5emeComponent } from './Modules/eme5/svt5eme/svt5eme.component';
import { Anglais5emeComponent } from './Modules/eme5/anglais5eme/anglais5eme.component';
import { Philosophy5emeComponent } from './Modules/eme5/philosophy5eme/philosophy5eme.component';
import { FormAdd5emeComponent } from './Modules/eme5/form-add5eme/form-add5eme.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  { path: 'home',    component: HomeComponent,canActivate:[AuthGuard]},
  {path:'comments', component: CommentsComponent,canActivate:[AuthGuard]},
  { path:'users',component: UserComponent ,canActivate:[AuthGuard],
    children:[  
              { path:'',redirectTo:'profile',pathMatch:'full'},
              { path:'profile',component:ProfileComponent},
              { path:'register',component:SignUpComponent},
            ]},
  { path:'register',component:SignUpComponent},
  { path:'default',component:DefaultComponent},
  { path:'bak1', component:Bak1Component,canActivate:[AuthGuard],
    children:[  
               { path:'',redirectTo:'math',pathMatch:'full'},
               { path:'math', component:MathComponent, 
                   children:[
                              { path:'',redirectTo:'cours',pathMatch:'full'},
                              { path:'cours',component:CoursComponent},
                              { path:'td',component:TDComponent}
                            ]
              },
              { path:'physique', component:PhysiqueComponent,
                  children:[
                             { path:'',redirectTo:'cours',pathMatch:'full'},
                             { path:'cours',component:CoursComponent},
                             { path:'td',component:TDComponent}
                           ]
              },
              { path:'svt', component:SvtComponent,
                 children:[
                            { path:'',redirectTo:'cours',pathMatch:'full'},
                            { path:'cours',component:CoursComponent},
                            { path:'td',component:TDComponent}
                          ]
              },
              { path:'anglais', component:AnglaisComponent,
                 children:[
                           { path:'',redirectTo:'cours',pathMatch:'full'},
                           { path:'cours',component:CoursComponent},
                           { path:'td',component:TDComponent}
                          ]
              },
              { path:'philosophy', component:PhilosophyComponent,
                 children:[
                           { path:'',redirectTo:'cours',pathMatch:'full'},
                           { path:'cours',component:CoursComponent},
                           { path:'td',component:TDComponent}
                          ]
              },
              {path:'addSubject', component:FormSubjectComponent},
    ],
       
},
{ path:'bak2', component:Bak2Component, canActivate:[AuthGuard],   
  children:[  
             { path:'',redirectTo:'math',pathMatch:'full'},
             { path:'math', component:Mathbak2Component, 
                 children:[
                            { path:'',redirectTo:'cours',pathMatch:'full'},
                            { path:'cours',component:Coursbak2Component},
                            { path:'td',component:Tdsbak2Component}
                          ]
            },
            { path:'physique', component:Physiquebak2Component,
                children:[
                           { path:'',redirectTo:'cours',pathMatch:'full'},
                           { path:'cours',component:Coursbak2Component},
                           { path:'td',component:Tdsbak2Component}
                         ]
            },
            { path:'svt', component:Svtbak2Component,
               children:[
                          { path:'',redirectTo:'cours',pathMatch:'full'},
                          { path:'cours',component:Coursbak2Component},
                          { path:'td',component:Tdsbak2Component}
                        ]
            },
            { path:'anglais', component:Anglaisbak2Component,
               children:[
                         { path:'',redirectTo:'cours',pathMatch:'full'},
                         { path:'cours',component:Coursbak2Component},
                         { path:'td',component:Tdsbak2Component}
                        ]
            },
            { path:'philosophy', component:Philosophybak2Component,
               children:[
                         { path:'',redirectTo:'cours',pathMatch:'full'},
                         { path:'cours',component:Coursbak2Component},
                         { path:'td',component:Tdsbak2Component}
                        ]
            },
            {path:'addBlog', component:Formbak2Component},
  ],
},
{ path:'eme5', component:Eme5Component, canActivate:[AuthGuard],   
  children:[  
             { path:'',redirectTo:'math',pathMatch:'full'},
             { path:'math', component:Math5emeComponent, 
                 children:[
                            { path:'',redirectTo:'cours',pathMatch:'full'},
                            { path:'cours',component:Cours5emeComponent},
                            { path:'td',component:TDs5emeComponent}
                          ]
            },
            { path:'physique', component:Physique5emeComponent,
                children:[
                           { path:'',redirectTo:'cours',pathMatch:'full'},
                           { path:'cours',component:Cours5emeComponent},
                           { path:'td',component:TDs5emeComponent}
                         ]
            },
            { path:'svt', component:Svt5emeComponent,
               children:[
                          { path:'',redirectTo:'cours',pathMatch:'full'},
                          { path:'cours',component:Cours5emeComponent},
                          { path:'td',component:TDs5emeComponent}
                        ]
            },
            { path:'anglais', component:Anglais5emeComponent,
               children:[
                         { path:'',redirectTo:'cours',pathMatch:'full'},
                         { path:'cours',component:Cours5emeComponent},
                         { path:'td',component:TDs5emeComponent}
                        ]
            },
            { path:'philosophy', component:Philosophy5emeComponent,
               children:[
                         { path:'',redirectTo:'cours',pathMatch:'full'},
                         { path:'cours',component:Cours5emeComponent},
                         { path:'td',component:TDs5emeComponent}
                        ]
            },
            {path:'addBlog', component:FormAdd5emeComponent},
  ],
},
  { path:'**', component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents=[
UserComponent,
ProfileComponent,
SignUpComponent,
SignInComponent,
CommentsComponent,
HomeComponent,
DefaultComponent,
Eme5Component,
Math5emeComponent,
Cours5emeComponent,
TDs5emeComponent,
Physique5emeComponent,
Svt5emeComponent,
Anglais5emeComponent,
Philosophy5emeComponent,
FormAdd5emeComponent,
// LogindialogComponent
]
