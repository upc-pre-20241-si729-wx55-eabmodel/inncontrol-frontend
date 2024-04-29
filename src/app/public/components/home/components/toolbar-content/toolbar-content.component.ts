import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-toolbar-content',
  templateUrl: './toolbar-content.component.html',
  styleUrl: './toolbar-content.component.css'
})
export class ToolbarContentComponent {

  options = [
    // {title: 'Home', path: '/home'},
    {title: 'Inventory', path: '/inventory'},
    {title: 'Tasks', path: '/tasks'},
    {title: 'Room States', path: '/room-state'},
    {title: 'Report', path: '/messages'},
    {title: 'Employees', path: '/employees'},
  ];
}
