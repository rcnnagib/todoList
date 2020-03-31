import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { Task } from '../task/task.model';
@Component({
  selector: 'app-financeiro',
  templateUrl: './financeiro.component.html',
  styleUrls: ['./financeiro.component.css']
})
export class FinanceiroComponent implements OnInit {

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
