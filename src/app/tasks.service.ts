import {Injectable} from '@angular/core'
import {MEAT_API} from './app.api'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import {retry, catchError } from 'rxjs/operators';
import { ErrorHandler } from './app.error-handler';
import { Task } from './task/task.model';

@Injectable()
export class TasksService{
    
    constructor(private http: HttpClient){}        
    
    //Lista de Tarefas
    tasks(): Observable<Task[]>{        
        return this.http.get<Task[]>(`${MEAT_API}/tasks`).pipe(catchError(ErrorHandler.handleError))          
    }

    //Atualizacao das tarefas
    updateTask(task):Observable<Task>{
        let httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
          }          
          return this.http.put<Task>(`${MEAT_API}/tasks/${task.id}`, JSON.stringify(task), httpOptions)           
    }


    //Inclusao das tarefas
    insertTask(task):Observable<Task>{
        let httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
          }          
          return this.http.post<Task>(`${MEAT_API}/tasks`, JSON.stringify(task), httpOptions)           
    }

    deleteTask(task):Observable<string>{
        return this.http.delete<string>(`${MEAT_API}/tasks/${task.id}`)           
    }

}
