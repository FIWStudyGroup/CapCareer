import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { StartpageComponent } from './startpage/startpage.component';
import { TableComponent } from './table/table.component';
import { ThirdpageComponent } from './thirdpage/thirdpage.component';



@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,

    FooterComponent,
    HeaderComponent,    
    StartpageComponent,
    TableComponent,
    ThirdpageComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
