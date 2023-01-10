import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StartpageComponent } from './startpage/startpage.component';
import { TableComponent } from './table/table.component';
import { DetailComponent } from './detail/detail.component';
import { ThirdpageComponent } from './thirdpage/thirdpage.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ResultComponent } from './result/result.component';


const routes: Routes = [
  {path: 'header', component: HeaderComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'start', component: StartpageComponent},
  {path: 'table', component: TableComponent},
  {path: 'detail', component: DetailComponent},
  {path: 'test', component: ThirdpageComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'questionnaire', component: QuestionnaireComponent},
  {path: 'result', component: ResultComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
