import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos = [
    new Todo(1, 'sdfsdfsf', false, new Date()),
    new Todo(2, 'sdfsdfsdfsdfsd', true, new Date()),
    // { id: 1, description: 'sdsd' },
    // { id: 2, description: 'sdfsdfsdfsdfsd' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
