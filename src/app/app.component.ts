import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { TasksComponent } from './tasks/tasks.component';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  // property "users" om data uit DUMMY_USERS te verkrijgen
  users = DUMMY_USERS; 
  // store de geselecteerde gebruiker
  selectedUserId?: string; 

  // deze getter (computed property) doorzoekt de lijst van gebruikers (this.users) en retourneert de gebruiker waarvan de id overeenkomt met de huidige waarde van selectedUserId
  // ! geeft aan dat de return-waarde niet undefined zal zijn
  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }
  
  // methode om selectedUserId te veranderen dmv actie (button)
  onSelectUser(id: string) {
    this.selectedUserId = id;
    console.log('selected user with id ' + id);
  }
}
