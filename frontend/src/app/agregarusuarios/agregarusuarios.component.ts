import { Component, OnInit } from '@angular/core';

import { UsuarioService } from '../services/usuario.service';
import { NgForm } from '@angular/forms';
import { Usuario } from '../models/usuario';

declare var M: any;


@Component({
  selector: 'app-agregarusuarios',
  templateUrl: './agregarusuarios.component.html',
  styleUrls: ['./agregarusuarios.component.css'],
  providers: [ UsuarioService ]
})
export class AgregarusuariosComponent implements OnInit {

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {

    this.getUsuarios();

  }


addUsuario(form?: NgForm) {
  console.log(form.value);
  if(form.value._id) {
    this.usuarioService.putUsuario(form.value)
      .subscribe(res => {
        this.resetForm(form);
        this.getUsuarios();
        M.toast({html: 'Updated Successfully'});
      });
  } else {
    this.usuarioService.postUsuario(form.value)
    .subscribe(res => {
      this.getUsuarios();
      this.resetForm(form);
      M.toast({html: 'Save successfully'});
    });
  }
  
}

getUsuarios() {
  this.usuarioService.getUsuarios()
    .subscribe(res => {
      this.usuarioService.usuario = res as Usuario[];
    });
}

editUsuario(usuario: Usuario) {
  this.usuarioService.selectedUsuario = usuario;
}

deleteUsuario(_id: string, form: NgForm) {
  if(confirm('Are you sure you want to delete it?')) {
    this.usuarioService.deleteUsuario(_id)
      .subscribe(res => {
        this.getUsuarios();
        this.resetForm(form);
        M.toast({html: 'Deleted Succesfully'});
      });
  }
}

resetForm(form?: NgForm) {
  if (form) {
    form.reset();
    this.usuarioService.selectedUsuario = new Usuario();
  }
}

}
