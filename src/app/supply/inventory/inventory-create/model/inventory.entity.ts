export class Inventory {

  id: number;
  name: string;
  description: string;
  providerId: number;
  providerName: string;
  providerContact: string;
  providerDesc: string;
  quantity: string;


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
}


