import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, SelectControlValueAccessor } from '@angular/forms';
import { DadoComponent } from './components/dado/dado.component';
import { CronometroComponent } from './components/cronometro/cronometro.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { GestionPerrosService } from './services/gestion-perros.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, DadoComponent, CronometroComponent,FormularioComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    
  }
}


