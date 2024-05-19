import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {Task} from "../task-create/model/task.entity";
import {TaskApiService} from "../task-create/services/task-api.service";

@Component({
  selector: 'app-task-content',
  templateUrl: './task-content.component.html',
  styleUrl: './task-content.component.css'
})
export class TaskContentComponent implements OnInit,AfterViewInit {
  tasksData: Task;
  length: number = 1;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = ['id', 'taskName', 'description', 'dueDate', 'status', 'userid', 'creationDate'];
  dataSource: MatTableDataSource<Task>;

  constructor(private taskService: TaskApiService) {
    this.dataSource = new MatTableDataSource<any>();
    this.tasksData = {} as Task;
  }



  private getAllTasks(): void {
    this.taskService.getAll().subscribe((response: any)=>{
      this.dataSource.data = response;
    })
  }

  private createTask(){
    this.taskService.create(this.tasksData).subscribe((response: any)=>{
      this.dataSource.data.push({...response});
      this.dataSource.data = this.dataSource.data.map((task: Task) =>{
        return task;
      });
    });
  };

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
   this.getAllTasks();
  }

  /*
  getTasks(): void {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
      this.dataSource.data = this.tasks;
      this.length = this.tasks.length;
    });
  }

  onTaskCreatedEvent($event: Task) {
    console.log('Task created');
    this.length++;
    $event.id = this.length.toString();
    console.log($event);
    this.taskService.addTask($event).subscribe(task => {
      this.tasks.push(task);
      this.dataSource._updateChangeSubscription();
    });
  }*/

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
