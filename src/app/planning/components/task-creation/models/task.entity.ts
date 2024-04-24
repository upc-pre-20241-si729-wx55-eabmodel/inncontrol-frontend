export class TaskEntity {

  id: string;
  name: string;
  completion: number;
  description: string;
  dueDate: Date;
  status: string;
  creationDate: Date;
  updateDate: Date;
  userId: string;

  constructor(id: string, name: string, description: string, dueDate: Date, status: string, creationDate: Date, updateDate: Date, userId: string) {
    this.id = id;
    this.name = name;
    this.completion = 0;
    this.description = description;
    this.dueDate = dueDate;
    this.status = status;
    this.creationDate = creationDate;
    this.updateDate = updateDate;
    this.userId = userId;
  }


}
