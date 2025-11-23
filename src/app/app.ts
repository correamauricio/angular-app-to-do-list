import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { LucideAngularModule, ListTodo, Plus } from 'lucide-angular';

export interface TodoItem {
  id: number;
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LucideAngularModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App {
  readonly ListTodo = ListTodo;
  readonly Plus = Plus;
  todoList: TodoItem[] = [];
  newTask: string = '';

}
