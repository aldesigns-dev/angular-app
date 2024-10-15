import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
  imports: [TaskComponent, NewTaskComponent]
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  addNewTask = false;

  // methode is automatisch executed als deze class wordt geinstantieerd. Dependency Injection.
  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onCompleteTask(id: string) {}

  onAddNewTask() {
    this.addNewTask = true; // dialog openen
  }

  onCancelAddTask() {
    this.addNewTask = false; // dialog sluiten
  }

  // //1
  // // ? zegt tegen ts dat de input undefined kan zijn 
  // @Input() name?: string;
  // // alternatief: @Input() name: string | undefined;
  // tasks = [
  //   {
  //     id: 't1',
  //     userId: 'u1',
  //     title: 'Master Angular',
  //     summary: 'Learn all the basics',
  //     dueDate: '30-10-2024', 
  //   },
  //   {
  //     id: 't2',
  //     userId: 'u2',
  //     title: 'Master Angular',
  //     summary: 'Learn all the basics',
  //     dueDate: '30-10-2024', 
  //   },
  //   {
  //     id: 't3',
  //     userId: 'u2',
  //     title: 'Master Angular',
  //     summary: 'Learn all the basics',
  //     dueDate: '30-10-2024', 
  //   }
  // ]
  // // computed property om tasks te filteren die aan de gebruiker is toegewezen
  // get selectedUserTasks() {
  //   return this.tasks.filter((task) => task.userId === this.userId);
  // }
  // // methode om tasks lijst te updaten: verwijder task die als completed is gemarkeerd
  // // als je de methode onCompleteTask met id 't2' aanroept:
  // // task.t1 !== t2 is true dus blijft in de lijst
  // // task.t2 !== t2 is false dus wordt verwijderd
  // onCompleteTask(id: string) {
  //   this.tasks = this.tasks.filter((task) => task.id !== id);
  // }
  // // methode om de dialog te openen
  // onAddNewTask() {
  //   this.addNewTask = true;
  // }
  // // methode om de dialog te sluiten
  // onCancelAddTask() {
  //   this.addNewTask = false;
  // }
  // // methode om de nieuwe task toe te voegen
  // onAddTask(taskData: NewTaskData) {
  //   this.tasks.push({
  //     id: new Date().getTime().toString(),
  //     userId: this.userId,
  //     title: taskData.title,
  //     summary: taskData.summary,
  //     dueDate: taskData.date
  //   })
  //   this.addNewTask = false;
  // }
}
