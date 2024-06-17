import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodolistComponent implements OnInit {
  taskArray : { taskName: string, isCompleted: boolean }[] = [];
  

  constructor() { }

  ngOnInit(): void {
    this.loadTasks();
  }

  onSubmit(form: NgForm) {
    console.log(form);

    this.taskArray.push({
      taskName: form.controls['task'].value,
      isCompleted: false
    });

    form.reset();
    this.saveTasks()
  }

  onDelete(index: number) {
    this.taskArray.splice(index, 1);
    this.saveTasks();

    console.log(index);
  }

  onCheck(index: number) {
    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
    this.saveTasks();

    console.log(this.taskArray);
  }

  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.taskArray));
  }

loadTasks() {
  const storedTasks = localStorage.getItem('tasks');
  if (storedTasks) {
    this.taskArray = JSON.parse(storedTasks);
  }
  else {
    this.taskArray = [{
      taskName: 'do learn Angular', isCompleted: false
    }]
  }
}

}