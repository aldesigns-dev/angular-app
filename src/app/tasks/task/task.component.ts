import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { type Task } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  //@Output() complete = new EventEmitter();

  private taskService = inject(TasksService);

  // // methode om het geselecteerde id naar parent te versturen
  // onCompleteTask() {
  //   this.complete.emit(this.task.id);
  // }
  // <app-task [task]="task" (complete)="onCompleteTask($event)" />
  onCompleteTask() {
    this.taskService.removeTask(this.task.id);
  }
}
