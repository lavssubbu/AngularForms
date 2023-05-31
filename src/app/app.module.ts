import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormcompComponent } from './formcomp/formcomp.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { ReactivefrmComponent } from './reactivefrm/reactivefrm.component';
import { RouterModule } from '@angular/router';
import { FormwithmodelComponent } from './formwithmodel/formwithmodel.component';
import { TemplateformvalidateComponent } from './templateformvalidate/templateformvalidate.component';
import { ReactiveformvalidateComponent } from './reactiveformvalidate/reactiveformvalidate.component';

@NgModule({
  declarations: [
    AppComponent,
    FormcompComponent,
    ReactivefrmComponent,
    FormwithmodelComponent,
    TemplateformvalidateComponent,
    ReactiveformvalidateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
