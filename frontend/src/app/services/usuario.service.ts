import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  selectedUsuario: Usuario;
  usuario: Usuario[];
  
  readonly URL_API = 'http://pepe.sytes.net:3000/usuarios';

  constructor(private http: HttpClient) {
    this.selectedUsuario = new Usuario();
  }

  postUsuario(usuario: Usuario) {
    return this.http.post(this.URL_API, usuario);
  }

  getUsuarios() {
    return this.http.get(this.URL_API);
  }

  putUsuario(usuario: Usuario) {
    return this.http.put(this.URL_API + `/${usuario._id}`, usuario);
  }

  deleteUsuario(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
