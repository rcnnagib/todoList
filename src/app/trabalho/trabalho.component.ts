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
