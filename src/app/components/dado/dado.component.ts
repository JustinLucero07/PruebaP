import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dado',
  standalone: true,
  imports: [],
  templateUrl: './dado.component.html',
  styleUrl: './dado.component.scss'
})
export class DadoComponent implements OnInit{
  valor = 0;
  @Input() color:string = '';
  @Input() msj:string='';
  ngOnInit(): void {
    this.lanzar() 
  }

  direccion = ''
  lanzar(){
    this.valor = Math.trunc(Math.random() * 6) + 1

    if(this.valor === 1){
      this.direccion = "imagenes/1.png" 
    }else if(this.valor === 2){
      this.direccion = "imagenes/2.png"
    }else if(this.valor === 3){
      this.direccion = "imagenes/3.png"
    }else if(this.valor === 4){
      this.direccion = "imagenes/4.png"
    }else if(this.valor === 5){
      this.direccion = "imagenes/5.png"
    }else if(this.valor === 6){
      this.direccion = "imagenes/6.png"
    }
  }
}
