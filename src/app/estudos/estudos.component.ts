import { Component, OnInit, ViewChild } from '@angular/core';
import { Task } from '../task/task.model';
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-trabalho',
  templateUrl: './estudos.component.html',
  styleUrls: ['./estudos.component.css']
})
export class EstudosComponent implements OnInit {
  tasks: Task[];
  newTask: Task = {task: '', description: '', date: '', status: '1', category: '2'};
  constructor(private tasksService: TasksService) {}
  ngOnInit() {
    console.log('carregando tarefas');
    this.tasksService.tasks('2').subscribe(tasks => this.tasks = tasks);
  }

  insertNewTask(task) {
    this.tasks.push(task);
    this.newTask = {task: '', description: '', date: '', status: '1', category: '2'};
  }
}
