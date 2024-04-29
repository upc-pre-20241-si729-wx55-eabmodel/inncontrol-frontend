export class Item {

  id: string;
  name: string;
  description: string;
  quantity: number;

  constructor(id: string, name: string, description: string, quantity: number) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.quantity = quantity;
  }
}
