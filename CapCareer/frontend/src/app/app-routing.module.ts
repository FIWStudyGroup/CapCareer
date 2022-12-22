import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { StartpageComponent } from './startpage/startpage.component';
import { TableComponent } from './table/table.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {path: 'header', component: HeaderComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'firstpage', component: FirstpageComponent},
  {path: 'start', component: StartpageComponent},
  {path: 'table', component: TableComponent},
  {path: 'detail', component: DetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
