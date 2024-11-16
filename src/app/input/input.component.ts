import { Component, Input } from '@angular/core';
import { Task } from '../table/TaskScheema';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  @Input() tasks: Task[] = [];

  addTask(descrption: any) {
    if (descrption.value == '') {
      return;
    }
    this.tasks.push({
      number: this.tasks.length,
      description: descrption.value,
      done: false,
    });

    descrption.value = '';
  }
}
