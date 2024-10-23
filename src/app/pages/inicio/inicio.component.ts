import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { DadoComponent } from '../../components/dado/dado.component';
import { CronometroComponent } from '../../components/cronometro/cronometro.component';
import { FormularioComponent } from '../../components/formulario/formulario.component';
import { GestionPerrosService } from '../../services/gestion-perros.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, DadoComponent, CronometroComponent,FormularioComponent, RouterModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent implements OnInit {
  title = 'Justin Lucero';
  name = 'Demo65';
  edad = 10;
  salario =1000;

  a=0;
  b=0;
  c=0; 

  articulos =[
    {codigo: 1, descripcion: 'TV', precio: 1700} ,
    {codigo: 2, descripcion: 'Laptop', precio: 2000} ,
    {codigo: 3, descripcion: 'Cama', precio: 170} 
  ];

  codigo = 0;
  descripcion = '';
  precio = 0;

  sueldos = [1700,500,950,450];
  esmayordeedad(){
    if(this.edad >= 18){
        return 'Es mayor de edad';
    }else{
      return 'Es menor de edad';

    }
  }
  contador = 0;
  incrementar(){
    this.contador = this.contador +1;
  }

  sumar(){
    this.c = this.a + this.b;
  }

  @ViewChild('formulario') formulario!: FormularioComponent
  guardar(articulo: any) {
    const { codigo, descripcion, precio } = articulo;
  
    const index = this.articulos.findIndex(a => a.codigo === codigo);
  
    if (index !== -1) {
      this.articulos[index] = { codigo, descripcion, precio };
    } else {
      this.articulos.push({ codigo, descripcion, precio });
    }
  }

  formularioValido: boolean = false;  

  borrar(codigo:number) {
    let articulosn = this.articulos.filter(articulo =>
        articulo.codigo !== codigo
    );
    this.articulos = articulosn;
  }

  seleccionar(codigo: number) {
    const articulo = this.articulos.find(art => art.codigo === codigo);
    if (articulo) {
      this.formulario.codigo = articulo.codigo;
      this.formulario.descripcion = articulo.descripcion;
      this.formulario.precio = articulo.precio;
    }
  }

  @ViewChild('dado1') dado1!: DadoComponent;
  @ViewChild('dado2') dado2!: DadoComponent;
  @ViewChild('dado3') dado3!: DadoComponent;

  msj = ''
  lanzar(){
    this.dado1.lanzar();
    this.dado2.lanzar();
    this.dado3.lanzar();

    if(this.dado1.valor === this.dado2.valor){
      this.msj = 'Ganado';
    }else if(this.dado1.valor === this.dado3.valor){
      this.msj = 'Ganado';
    }else if(this.dado2.valor === this.dado3.valor){
      this.msj = 'Ganado';
    }else{
      this.msj = 'Perdido';
    }
  }

  minuto = 0
  actualizar(estado:boolean){
    if(estado === true){
      this.minuto ++
    }
  }
  /*servicios*/

  perros:any 

  constructor(private perrosService: GestionPerrosService){

  }

  ngOnInit(): void {
    this.perrosService.addPerros('Renzo','Beagle');
    this.perrosService.addPerros('Rambo','Koker');
    this.perros = this.perrosService.getPerros();
  }
}
