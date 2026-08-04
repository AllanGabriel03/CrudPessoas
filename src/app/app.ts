import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './component/menu/menu';
import { HomeComponent } from './component/home-component/home-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menu, HomeComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('crud-pessoa');
}
