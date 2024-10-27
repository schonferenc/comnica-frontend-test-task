import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { UserService } from './services/user.service';

// Components
import { AppButtonComponent } from './components/app-button/app-button.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  titleService = inject(Title);

  ngOnInit(): void {
    this.titleService.setTitle('Comnica');
  }
  
  onClick() {
    console.log('Kezdhetjük');
  }



/* Task 3 */
userService = inject(UserService);

onFetchUsers() {
  this.userService.fetchUsersAndAssignColors().subscribe(users => {
    console.log(users);
  });
}
}