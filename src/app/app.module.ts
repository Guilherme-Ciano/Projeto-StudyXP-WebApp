import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { AppComponent } from './app.component';
import { DashboardAlunoComponent } from './views/Alunos/dashboard-aluno/dashboard-aluno.component';
import { ConfigAlunosComponent } from './views/Alunos/config-alunos/config-alunos.component';
import { DashboardProfComponent } from './views/Professores/dashboard-prof/dashboard-prof.component';
import { ConfigProfComponent } from './views/Professores/config-prof/config-prof.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './views/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { SidemenuComponent } from './views/sidemenu/sidemenu.component';
import { CriarTarefaComponent } from './views/Professores/criar-tarefa/criar-tarefa.component';

@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    CadastroComponent,
    DashboardAlunoComponent,
    DashboardProfComponent,
    ConfigAlunosComponent,
    ConfigProfComponent,
    SidemenuComponent,
    CriarTarefaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatTabsModule,
    MatGridListModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatDialogModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
