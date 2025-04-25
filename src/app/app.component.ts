import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LogoComponent } from './components/logo/logo.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContentComponent } from './components/content/content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LogoComponent, MenuComponent, ContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  company_name = 'Innoversions';
}
