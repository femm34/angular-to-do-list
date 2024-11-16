import { Component, Input } from '@angular/core';
import { Task } from './TaskScheema';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  @Input() tasks: Task[] = [];

  deleteItem(task: Task) {
    task.done = !task.done;
  }
}
