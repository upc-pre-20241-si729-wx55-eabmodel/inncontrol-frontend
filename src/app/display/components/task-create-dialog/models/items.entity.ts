export class ItemsEntity {

  id: string;
  taskName: string;
  description: string;
  quantity: number;

  constructor(id: string, taskName: string, description: string, quantity: number) {
    this.id = id;
    this.taskName = taskName;
    this.description = description;
    this.quantity = quantity;
  }
}
