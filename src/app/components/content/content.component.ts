import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

const ARTICLES = [
  {id: 1, content: 'Innoversions is an East Coast based Engineering firm specializing in Telecom, Roller Coasters and Skyhooks.', section: 'section1'},
  {id: 2, content: 'So many amazing projects.', section: 'section2'},
  {id: 3, content: 'Oh yeah, we know what we\'re doing.  None of the structures we\'ve designed has fallen down yet.', section: 'section3'},
  {id: 4, content: 'Bachelor\'s in Civil Engineering', section: 'section4'},
  {id: 5, content: 'They say good things about us in the Washington Times.', section: 'section5'},
  {id: 6, content: 'In the Wall Street Journal, too.', section: 'section6'},
  {id: 7, content: 'And, we have opinions.', section: 'section7'}
];

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  articles = ARTICLES;
}
