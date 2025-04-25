import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

const SECTIONS = [
  {id: 1, name: 'About', url: '#section1'},
  {id: 2, name: 'Projects', url: '#section2'},
  {id: 3, name: 'Experience', url: '#section3'},
  {id: 4, name: 'Education', url: '#section4'},
  {id: 5, name: 'Publications', url: '#section5'},
  {id: 6, name: 'Press', url: '#section6'},
  {id: 7, name: 'Blog', url: '#section7'}
];


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})

export class MenuComponent {
  sections = SECTIONS;
}
