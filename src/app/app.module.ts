import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { AceEditorModule } from 'ng2-ace-editor'; //good until Angular 5 update this to Angular 9 plugin before prod release
//import { AceEditorModule }from 'ngx-ace-editor-wrapper'; //compatible with Angular 9
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CenterBoxLeftComponent } from './center-box-left/center-box-left.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    NgxJsonViewerModule,
    AceEditorModule,
    RouterModule.forRoot([
      { path: '', component: CenterBoxLeftComponent }
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    CenterBoxLeftComponent
      ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
