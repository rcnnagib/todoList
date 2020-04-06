import { Component, OnInit} from '@angular/core';
import { TasksService } from '../tasks.service';
import { Task } from '../task/task.model';
@Component({
  selector: 'app-trabalho',
  templateUrl: './trabalho.component.html',
  styleUrls: ['./trabalho.component.css']
})
export class TrabalhoComponent implements OnInit {
  tasks:Task[]  
  newTask:Task = {task:"", description:"", date:"", status:"1", category:"1"}
  constructor(private tasksService: TasksService){}
  ngOnInit(){
    console.log("carregando tarefas")
    this.tasksService.tasks('1').subscribe(tasks => this.tasks = tasks)
    
  }
  
  insertNewTask(task){        
    this.tasks.push(task)
    this.newTask = {task:"", description:"", date:"", status:"1", category:"1"}
  }
}
