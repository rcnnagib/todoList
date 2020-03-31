import { Component, OnInit, ViewChild } from '@angular/core';
import { Task } from '../task/task.model';
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-trabalho',
  templateUrl: './estudos.component.html',
  styleUrls: ['./estudos.component.css']
})
export class EstudosComponent implements OnInit {

  tasks:Task[]  
  constructor(private tasksService: TasksService){}
  ngOnInit(){
    console.log("carregando tarefas")
    this.tasksService.tasks().subscribe(tasks => this.tasks = tasks)
    
  }
  
  recebeFeeedBack(respostaFilho){    
    console.log("Essa foi a resposta do meu filho: " + respostaFilho)
    this.ngOnInit()
  }
  
}
