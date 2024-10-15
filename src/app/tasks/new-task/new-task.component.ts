import { Component, Output, EventEmitter, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  // stelt "cancel en add" beschikbaar aan parent component 
  @Output() cancel = new EventEmitter();
  // @Output() add = new EventEmitter<NewTaskData>();

  // [(ngModel)] verbindt form input met de variabele enteredTitle. Elke keer dat de gebruiker iets invoert, wordt de waarde van enteredTitle bijgewerkt, en andersom (two-way binding). Change detection mechanisme
  enteredTitle = '';
  enteredSummary ='';
  enteredDate = '';

  // dependency injection gebruikt service om een task toe te voegen
  private tasksService = inject(TasksService);

  onCancel() {
    this.cancel.emit();
  }

  // onSubmit() {
  //   this.add.emit({
  //     title: this.enteredTitle,
  //     summary: this.enteredSummary,
  //     date: this.enteredDate,
  //   });
  // }
  onSubmit() {
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    }, this.userId)
    this.cancel.emit();
  }
}
