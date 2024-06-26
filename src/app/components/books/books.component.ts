import { Component } from '@angular/core';
import { Book } from '../../book';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {
  books: Book[] = [
    {
      id: 1,
      title: "Java 24 horas",
      author: "Glauco Todesco",
      price: 40.50
    },
    {
      id: 2,
      title: "Angular 24 horas",
      author: "Fernanda Maria",
      price: 36.50
    },
    {
      id: 3,
      title: "AWS 24 horas",
      author: "Juliana Silva",
      price: 43.25
    },
    {
      id: 4,
      title: "JavaScript 24 horas",
      author: "Roberto Carlos",
      price: 50.00
    }
  ];
}
