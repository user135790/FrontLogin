import { Component } from '@angular/core';
import { CustomPrimengModule } from '../custom-primeng/custom-primeng.module';
import {gsap} from 'gsap'

@Component({
  selector: 'app-background-svg',
  imports: [CustomPrimengModule],
  templateUrl: './background-svg.component.html',
  styleUrl: './background-svg.component.css'
})
export class BackgroundSvgComponent {

  movimiento = "";

  calcularDesplazamiento(id:string, distancia:number):number{
    let posicionX= gsap.getProperty(id, 'x') as number; 
    return posicionX + distancia;
  }

  ngAfterViewInit(){

    let lineaTiempo = gsap.timeline()
    let identificadores = ["#g92","#g96","#g100", "#g72", "#g88"]
    let haciaAtras = ["#g108","#g104"]
    let aguaAdelante = ["#g354","#g376"]
    let aguaAtras = ["#g368","#g372"]

    aguaAdelante.forEach(id=>{
      console.log(id)
      lineaTiempo.to(id,{duration:20, x: this.calcularDesplazamiento(id, 50), stagger:0, repeat:1},0)
    })

    aguaAtras.forEach(id=>{
      console.log(id)
      lineaTiempo.to(id,{duration:20, x: this.calcularDesplazamiento(id, 50), stagger:0, repeat:1},0)
    })

    haciaAtras.forEach(id=>{
      console.log(id)
      lineaTiempo.to(id,{duration:30, x: this.calcularDesplazamiento(id, -500), stagger:0, repeat:1},0)
    })

    identificadores.forEach(id=>{
      console.log(id)
      lineaTiempo.to(id,{duration:30, x: this.calcularDesplazamiento(id, 300), stagger:0, repeat:1},0)
    })

  }

  
}
