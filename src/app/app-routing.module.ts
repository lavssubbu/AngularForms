import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormcompComponent } from './formcomp/formcomp.component';
import { ReactivefrmComponent } from './reactivefrm/reactivefrm.component';
import { TemplateformvalidateComponent } from './templateformvalidate/templateformvalidate.component';
import { ReactiveformvalidateComponent } from './reactiveformvalidate/reactiveformvalidate.component';

const routes: Routes = [
  {'path':'template',component:FormcompComponent},
  {'path':'reactive',component:ReactivefrmComponent},
  {'path':'templatevalidate',component:TemplateformvalidateComponent},
  {'path':'reactivevalidate',component:ReactiveformvalidateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
