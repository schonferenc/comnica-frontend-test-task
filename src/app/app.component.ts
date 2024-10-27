import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';
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
}
