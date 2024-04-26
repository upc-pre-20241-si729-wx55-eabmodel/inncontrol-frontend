import {Component} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-search-content',
  templateUrl: './search-content.component.html',
  styleUrl: './search-content.component.css'
})
export class SearchContentComponent {

  searchController: FormControl;

  constructor() {
    this.searchController = new FormControl('');
  }


  onSearch(event: any) {
    const value = this.searchController.value;
  }
}
