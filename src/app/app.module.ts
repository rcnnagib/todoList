import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@portinari/portinari-ui';
import {PoTemplatesModule} from '@portinari/portinari-templates'
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TaskComponent } from './task/task.component';
import { TrabalhoComponent } from './trabalho/trabalho.component';
import { HomeComponent } from './home/home.component';
import { TasksService } from './tasks.service';
import { EstudosComponent } from './estudos/estudos.component';
import { FinanceiroComponent } from './financeiro/financeiro.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TrabalhoComponent,
    EstudosComponent,
    HomeComponent,
    FinanceiroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    PoTemplatesModule,
    RouterModule.forRoot([]),
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
