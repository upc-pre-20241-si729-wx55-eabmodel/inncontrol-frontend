export class Inventory {

  id: number;
  name: string;
  description: string;
  providerId: number;
  providerName: string;
  providerContact: string;
  providerDesc: string;
  quantity: string;
  private inventoryList: any;


  constructor(id: number, name: string, description: string, providerId: number, providerName: string, providerContact: string, providerDesc: string, quantity: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.providerId = providerId;
    this.providerName = providerName;
    this.providerContact = providerContact;
    this.providerDesc = providerDesc;
    this.quantity = quantity;
  }

  getItemById(id: number): Inventory | undefined {
    let inventoryItem: Inventory | undefined;

    this.inventoryList?.forEach((item: Inventory | undefined) => {
      // @ts-ignore
      if (item.id === id) {
        inventoryItem = item;
      }
    });

    return inventoryItem;
  }
}


