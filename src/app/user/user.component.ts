import { Component, Input, Output, EventEmitter } from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
  imports: [CardComponent]
})
export class UserComponent {
  // @Input decorator maakt het mogelijk om data te ontvangen van parent component
  // ! zegt tegen ts dat de waarde later wordt toegekend (niet undefined zal zijn)
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  // @Output maakt het mogelijk om een event te versturen naar parent component
  @Output() select = new EventEmitter();

  // // 2: alternatief 
  // @Input({ required: true }) user!: {
  //   id: string;
  //   avatar: string;
  //   name: string;
  // }

  get imageUrl() {
    return '/assets/users/' + this.user.avatar;
  }

  // methode om de user id te versturen naar parent component
  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
