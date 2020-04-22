import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { Task } from '../task/task.model';
@Component({
  selector: 'app-financeiro',
  templateUrl: './financeiro.component.html',
  styleUrls: ['./financeiro.component.css']
})
export class FinanceiroComponent implements OnInit {
  tasks: Task[];
  newTask: Task = {task: '', description: '', date: '', status: '1', category: '3'};
  constructor(private tasksService: TasksService) {}
  ngOnInit() {
    console.log('carregando tarefas');
    this.tasksService.tasks('3').subscribe(tasks => this.tasks = tasks);
  }

  insertNewTask(task) {
    this.tasks.push(task);
    this.newTask = {task: '', description: '', date: '', status: '1', category: '3'};
  }
}
