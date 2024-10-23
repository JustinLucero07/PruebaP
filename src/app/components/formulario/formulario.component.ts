import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent implements OnInit{

  formulario = 0;

  @Input() codigo: number = 0;
  @Input() descripcion: string = '';
  @Input() precio: number = 0;
  @Output() nform = new EventEmitter(); 

  ngOnInit(): void {
    
  }

  guardar() {
    if (this.codigo !== 0 && this.descripcion !== '' && this.precio !== 0) {
      this.nform.emit({codigo: this.codigo, descripcion: this.descripcion, precio: this.precio});
    }
  }  
  
}
