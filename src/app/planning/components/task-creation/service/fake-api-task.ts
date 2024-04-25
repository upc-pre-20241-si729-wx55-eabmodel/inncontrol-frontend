import { Injectable } from '@angular/core';
import { TaskEntity } from '../models/task.entity';

@Injectable({
  providedIn: 'root'
})
export class FakeApiService {
  private tasks: TaskEntity[] = []; // Lista de tareas

  constructor() {}

  getAllTasks(): TaskEntity[] {
    return this.tasks;
  }

  createTask(task: TaskEntity): void {
    // Obtener el último ID asignado
    const lastId = this.tasks.length > 0 ? parseInt(this.tasks[this.tasks.length - 1].id.substring(1)) : 0;
    // Incrementar el ID para asignar el nuevo ID
    const newId = 'T' + (lastId + 1).toString().padStart(4, '0');
    // Asignar el nuevo ID a la tarea
    task.id = newId;
    // Agregar la tarea a la lista de tareas
    this.tasks.push(task);
  }
}
