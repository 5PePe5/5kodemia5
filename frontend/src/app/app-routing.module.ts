import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{UsuariosComponent} from './usuarios/usuarios.component'
import { RouterModule, Routes } from '@angular/router';
import{AgregarusuariosComponent} from './agregarusuarios/agregarusuarios.component'
import{LoginComponent} from './login/login.component'


const routes: Routes = [
  {
    path: 'usuarios',
    component: UsuariosComponent
  },
  {
path: 'agregarusuarios',
   component: AgregarusuariosComponent
  },
  {
path: 'login',
component:LoginComponent

  }

]
@NgModule({
  
    imports: [ RouterModule.forRoot(routes) ],
    exports: [RouterModule]
  
})
export class AppRoutingModule { }
