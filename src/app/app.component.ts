import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TareasService } from './services/tareas.service';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, MatIconModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatListModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  
  listaTareas: string[] = [];
  nuevaTarea: string = '';

  // nos traemos el servicio de tareas
  private _tareasService = inject(TareasService);

  // ngOnInit es un método que se ejecuta al iniciar el componente
  // Nos vamos a traer la lista de tareas utilizando el service de tareas
  ngOnInit(): void {
    this.listaTareas = this._tareasService.getTareas();
  }

  agregarTarea() {
    this._tareasService.agregarTarea(this.nuevaTarea);
    this.nuevaTarea = '';
    this.listaTareas = this._tareasService.getTareas();
  }

  eliminarTarea(index: number) {
    this._tareasService.eliminarTarea(index);
    this.listaTareas = this._tareasService.getTareas();
  }
}
