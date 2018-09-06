import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DataService}from './services/data.service';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AgregarusuariosComponent } from './agregarusuarios/agregarusuarios.component';
import { FormsModule } from '@angular/forms'; // <-- ngModel lives here 
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    AgregarusuariosComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
   
    HttpClientModule,
   
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
