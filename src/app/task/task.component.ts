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

  newTask: Task = {task: '', description: '', date: '', status: '1', category: ''};
  labelExcluir = 'excluir';
  event: string;
  result: string;
  orientation: PoInfoOrientation;
  labelSize: number;

  constructor(private tasksService: TasksService) { }

  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;
  @ViewChild('optionsForm', { static: true }) form: NgForm;
  @Input() task: Task;
  @Input() action: string;


  @Output() eventNewTask = new EventEmitter();

  // confirma alteracao
  confirm: PoModalAction = {
    action: () => {
      if (this.action === 'Editar') {
        this.alterarTarefa();
      } else {
        this.inserirTarefa();
      }
      this.poModal.close();
    },
    label: 'Confirm'
  };

// cancela a edicao da tarefa
close: PoModalAction = {
  action: () => {

    this.poModal.close();
  },
  label: 'Close',
  danger: true
};


  ngOnInit() {
    if (!this.task.date) {
      this.labelExcluir = '';
      this.newTask  = {task: '', description: '', date: '', status: '1', category: ''};
    }

  }

  // Abre tela de edição da tarefa
  editTask() {
    this.newTask = Object.assign({}, this.task);
    console.log(this.newTask);
    this.poModal.open();
  }

  // Alteracao da data da tarefa
  changeDate(event: string) {
    this.event = event;
  }

  // Envia alteracao para API
  private alterarTarefa() {
    this.task = Object.assign({}, this.newTask);
    this.newTask = {task: '', description: '', date: '', status: '1', category: ''};
    this.tasksService.updateTask(this.task).subscribe(result => this.task = result);

  }


    // salva uma tarefa
    private inserirTarefa() {
      this.task = Object.assign({}, this.newTask);
      this.newTask = {task: '', description: '', date: '', status: '1', category: ''};
      this.tasksService.insertTask(this.task).subscribe(result => {console.log(result); this.eventNewTask.emit(this.task); } );
    }

    excluir() {
      this.tasksService.deleteTask(this.task).subscribe(result => {console.log(result); this.eventNewTask.emit(this.task); } );
    }

}



