export class Task {

  id: number;
  taskName: string;
  description: string;
  dueDate: Date;
  status: string;
  creationDate: Date;
  userId: string;


  constructor(id: number, taskName: string, description: string, dueDate: Date, status: string, creationDate: Date, userId: string) {
    this.id = id;
    this.taskName = taskName;
    this.description = description;
    this.dueDate = dueDate;
    this.status = status || 'pending';
    this.creationDate = creationDate;
    this.userId = userId;
  }
}
