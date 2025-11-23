import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { LucideAngularModule, ListTodo, Plus, Trash2 } from 'lucide-angular';

export interface TodoItem {
  id: number;
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LucideAngularModule, FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App {
  readonly ListTodo = ListTodo;
  readonly Plus = Plus;
  readonly Trash2 = Trash2;
  todoList: TodoItem[] = [];
  newTask: string = '';

  addTask():void {
    if(this.newTask.trim() !== '') {
      const newTodoItem:TodoItem = {
        id: Date.now(),
        task: this.newTask,
        completed: false
      };
      this.todoList.push(newTodoItem);
      this.newTask = '';
    }
  }

  deleteTask(task: TodoItem):void {
    if (!this.todoList || !task) return;
    const idx = this.todoList.findIndex(i => i.id === task.id);
    if (idx >= 0) {
      this.todoList.splice(idx, 1);
    }
  }
}
