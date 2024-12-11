import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  // Funciona como un mapeo de la lista de tareas, utilizando un formato de key-value
  // LocalStorage es un objeto global que permite almacenar datos en el navegador, que se guarda como un string largo
  // funciona asi: KEY listaTareas VALUE ["Tarea 1", "Tarea 2", "Tarea 3"], cada tarea del array obviamente tiene su index
  private localStorageKey = 'listaTareas';

  // Obtiene las tareas almacenadas en el LocalStorage, las parsea a un objeto JSON y las retorna
  getTareas(): string[] {
    return JSON.parse(localStorage.getItem(this.localStorageKey) as string) || [];
  }

  // Agrega una tarea a la lista de tareas, primero obtiene las tareas actuales, agrega la nueva tarea y guarda la lista en el LocalStorage
  agregarTarea(tarea: string) {
    const tareas = this.getTareas();
    tareas.push(tarea);
    localStorage.setItem(this.localStorageKey, JSON.stringify(tareas));
  }

  eliminarTarea(index: number) {
    const tareas = this.getTareas();
    tareas.splice(index, 1);
    localStorage.setItem(this.localStorageKey, JSON.stringify(tareas));
  }
}
