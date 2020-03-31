import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import {PoModalComponent, PoModalAction, PoInfoOrientation } from '@portinari/portinari-ui';

import { Task } from './task.model';
import { NgForm} from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  
  newTask: Task = {label: "", value:"", date: "", status:"1", category:""} 
  labelExcluir:string = "excluir"
  event: string
  result:string
  orientation: PoInfoOrientation
  labelSize: number

  constructor(private tasksService: TasksService) { }
  
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;
  @ViewChild('optionsForm', { static: true }) form: NgForm;
  @Input() task:Task
  @Input() title:string


  @Output() respostaFamilia = new EventEmitter()

  ngOnInit() {      
    if(!this.task.date){
      this.labelExcluir = ""      
      this.newTask  = {label: "", value:"", date: "", status:"1", category:""} 
    }
    
  }

  //Abre tela de edi��o da tarefa
  editTask(){
    this.newTask = Object.assign({}, this.task);
    console.log(this.newTask)
    this.poModal.open()
  }

  //Alteracao da data da tarefa
  changeDate(event: string) {
    this.event = event
  }

  
   //cancela a edicao da tarefa
   close: PoModalAction = {
    action: () => {

      this.poModal.close()
    },
    label: 'Close',
    danger: true
  };

  //confirma alteracao
  confirm: PoModalAction = {
    action: () => {
      if(this.task.id){
        this.alterarTarefa()
      }else{
        this.inserirTarefa()
      }
      this.poModal.close();
    },
    label: 'Confirm'
  };

  //Envia alteracao para API
  private alterarTarefa(){    
    console.log(this.newTask)
    this.task = Object.assign({}, this.newTask);
    this.newTask = {label: "", value:"", date: "", status:"1", category: ""}
    this.tasksService.updateTask(this.task).subscribe(result => this.task = result)
    
  }

  
    //salva uma tarefa
    private inserirTarefa(){      
      console.log(this.task)  
      this.task = Object.assign({}, this.newTask);
      this.newTask = {label: "", value:"", date: "", status:"1", category:""}   
      console.log(this.newTask)   
      this.tasksService.insertTask(this.task).subscribe(result => this.respostaFamilia.emit("resultado da inclusaoo:" + result))            
    }

    excluir(){                
      this.tasksService.deleteTask(this.task).subscribe( result => this.respostaFamilia.emit("resultado da exlusao:" + result)   )           
    }

}



