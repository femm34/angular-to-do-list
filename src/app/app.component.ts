import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableComponent } from './table/table.component';
import { InputComponent } from './input/input.component';
import { Task } from './table/TaskScheema';
import { tasksToDo } from './tasksToDo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TableComponent, InputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'to-do-list';
  tasksToDo: Task[] = tasksToDo;
}
