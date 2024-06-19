export class Inventory {


  id: number;
  productTitle: string;
  productDescription: string;
  Brand: string;
  Quantity: string;



  constructor(id: number, name: string, description: string,  brand: string,  quantity: string) {
    this.id = id;
    this.productTitle = name;
    this.productDescription = description;
    this.Brand = brand;
    this.Quantity = quantity;
  }
  getInventoryById(inventories: Inventory[], inventoryId: number): Inventory | undefined {
    return inventories.find(inventory => inventory.id === inventoryId);
  }

}


