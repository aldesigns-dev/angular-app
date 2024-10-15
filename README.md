# FirstAngularApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


## Angular cheatsheet
- **@Input** en **@Output** zijn decorators om data uit te wisselen tussen componenten.

- **@Input**: maakt het mogelijk om data te ontvangen van een parent component.

`@Input({ required: true }) user!: User;`.

- **@Output**: maakt het mogelijk om een event te versturen naar een parent component.

`@Output() select = new EventEmitter();`.

- **String interpolation**: dynamisch waarden weergeven.

`<h2>{{ user.name }}</h2>`.

- **Property binding**: koppelt een waarde aan een HTML-eigenschap. 

`<img [src]="imageUrl" [alt]="user.name"/>`
```typescript
get imageUrl() {
  return '/assets/users/' + this.user.avatar;
}
```

- **Event binding**: koppelt een gebeurtenis aan een functie.

`<button (click)="onSelectUser()">`.

- **Two-way data binding**: synchroniseert data tussen de component en de view in beide richtingen. 

`<input type="text" name="title" [(ngModel)]="enteredTitle"/>`.

- **ngModel**: is een Angular directive die wordt gebruikt voor two-way data binding tussen de ocmponent en de view. Wijzigingen in de invoer worden direct doorgegeven aan de component en andersom. 

- **Zone.js**: default Angular package dat events in de gaten houdt voor mogelijke veranderingen in data en dus ook de UI.

- **Signal**: wijst specifiek toe welke veranderingen Angular in de gaten moet houden.

`selectedUser = signal(USERS[randomIndex]);`

set method op een signal waarde (subscription)

 `this.selectedUser.set(USERS[randomIndex]);`
 
 `<span>{{ selectedUser().name }}</span>`.

- **@if**: conditionele voorwaarden bepalen:
```html
  @if (selectedUser) { 
    <app-tasks [userId]="selectedUser.id" [name]="selectedUser.name"/>
  } @else {
    <p id="fallback">Select a user to see their tasks!</p>
  }
```

- **@for**: loop door alle items van een array voor weergave met weinig html markup:
```html
  @for (user of users; track user.id) {
    <li>
      <app-user [user]="user" [selected]="user.id === selectedUserId" (select)="onSelectUser($event)" />
    </li>
  }
```

- **Class binding**: dynamisch css toevoegen: 

`<button [class.active]="selected" (click)="onSelectUser()">`.

- **ng-content**: Angular directive dat wordt gebruikt voor content projection. Maakt het mogelijk om inhoud van oudercomponent naar kindcomponent te injecteren.

`card.component.html`:
```html
<div>
  <ng-content />
</div>
```
`card.component.css`:
```css
div {
  border-radius: 6px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}
```
`import { CardComponent } from "../../shared/card/card.component";`

- **Pipe**: Angular feature waarmee je data kunt transformeren voor de weergave in de template.

`<time> {{ task.dueDate | date:'fullDate' }} </time>`.

- **ngSubmit**: koppelt een submit gebeurtenis van een formulier aan een methode in de component. Voorkomt een direct http request. 

`<form (ngSubmit)="onSubmit()">`.

- **Dependency Injection**: outsource data en logica van een component in een "service" die je vervolgens kun "injecteren" in alle gewenste componenten.

`service.ts`:
```typescript
@Injectable({providedIn: 'root'})
```
`component.ts`:
```typescript
constructor(private tasksService: TasksService) {}
```