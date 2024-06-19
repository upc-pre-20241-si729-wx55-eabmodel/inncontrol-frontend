import { Component, OnInit } from '@angular/core';
import {Inventory} from "../inventory-create/model/inventory.entity";
import {InventoryApiService} from "../inventory-create/services/inventory-api.service";
import {MatDialog} from "@angular/material/dialog";
import {InventoryEditDialogComponent} from "../inventory-create/components/inventory-edit-dialog/inventory-edit-dialog.component";
import {InventoryCardDialogComponent} from "../inventory-card-dialog/inventory-card-dialog.component";
import {MatFormField} from "@angular/material/form-field";
import {InventoryDeleteDialogComponent} from "../inventory-delete-dialog/inventory-delete-dialog.component";
@Component({
  selector: 'app-inventory-content',
  templateUrl: './inventory-content.component.html',
  styleUrl: './inventory-content.component.css'
})
export class InventoryContentComponent implements OnInit{
  inventoryData: Inventory[]=[];
  item: Inventory;
  options:{title: string}[]=[
    {
      title: 'More to less stock'
    },
    {
      title: 'Less to more stock'
    }
  ];
  constructor(private inventoryService: InventoryApiService, private dialog: MatDialog) {
    this.item = new Inventory(0,'','','','');
  }

  private getAllItems():void{
    this.inventoryService.getAll().subscribe((response:any)=>{
      this.inventoryData = response;
      console.log('Inventory data', this.inventoryData);
    })
  }

  protected createItem(inventory: Inventory){
    this.inventoryService.create(inventory).subscribe((response:any) =>{
      this.inventoryData.push(response);
    });
  };

searchFilter(event: any){
  console.log('Filtro recibido');
}
receiveFilter(event: any){
  console.log('Event received', event);
  if(event === 'More to less stock'){
    console.log('Order in: More to less');
  }else if(event === 'Less to more stock'){
    console.log('Order in: Less to more');
  }
}

  handleUpdate(inventory: Inventory):void{
    this.openUpdateDialog(inventory);
  }
  onDeleteItem(element: Inventory) {
    this.deleteItem(element.id);
  }
  handleDelete(inventory: Inventory) {
    this.openDeleteDialog(inventory);
  }
openDeleteDialog(inventory: Inventory){
  console.log('Delete dialog opened', inventory.id);
  const dialogRef = this.dialog.open(InventoryDeleteDialogComponent, {
    data: inventory
  });
  dialogRef.afterClosed().subscribe(result=>{
    if(result){
      this.onDeleteItem(result);
    }
  });
}
  private deleteItem(inventoryId: number) {
    this.inventoryService.delete(inventoryId).subscribe(() =>{
      this.inventoryData = this.inventoryData.filter((inventory: Inventory) => inventory.id !== inventoryId);
    });
  }
  openUpdateDialog(inventory: Inventory){
    console.log('Update dialog opened');
    const dialogRef = this.dialog.open(InventoryEditDialogComponent, {
      data:inventory
    });

    dialogRef.afterClosed().subscribe(result=>{
      if(result){
        this.updateItem(result);
      }
    });
  }

  private updateItem(inventory: Inventory){
    this.inventoryService.update(inventory.id, inventory).subscribe((response:Inventory)=>{
      const index = this.inventoryData.findIndex(i=>i.id==inventory.id);
      if(index!==-1){
        this.inventoryData[index] = response;
      }
    });
  }
  openDialog(info: any){
    let inventory = this.item.getInventoryById(this.inventoryData,info);
    console.log('Open Dialog', inventory);
    const dialogRef = this.dialog.open(InventoryCardDialogComponent, {
      data:inventory
    });
  }
  ngOnInit() {
    this.getAllItems();
  }
  protected readonly Inventory = Inventory;
}
