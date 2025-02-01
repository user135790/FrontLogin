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

  mover(){
    let lineaTemporal = gsap.timeline();
    lineaTemporal.from("#g2932", {duration:10, x:-1000},0)
    .from("#g4318",{duration:10, x:-1000},0)
    .from("#g4336", {duration:10, x:-1000},0)
    .from("#g4348", {duration:10, x:-1000},0)
    .from("#g4360", {duration:10, x:-1000},0)
    .from("#g4372", {duration:10, x:-1000},0)
    .from("#g4384", {duration:10, x:-1000},0)
    .from("#g4396", {duration:10, x:-1000},0)
    .from("#g4408", {duration:10, x:-1000},0)
    .from("#g4420", {duration:10, x:-1000},0)
    .from("#g4436", {duration:10, x:-1000},0)
    .from("#g4448", {duration:10, x:-1000},0)
    .from("#g4464", {duration:10, x:-1000},0)
    .from("#g4476", {duration:10, x:-1000},0)
    .from("#g4505", {duration:10, x:-1000},0)
    .from("#g4516", {duration:10, x:-1000},0)
    .from("#g4528", {duration:10, x:-1000},0)
    .from("#g4544", {duration:10, x:-1000},0)
    .from("#g4504", {duration:10, x:-1000},0)
    .from("#g4516", {duration:10, x:-1000},0)
    .from("#g4528", {duration:10, x:-1000},0)
    .from("#g4544", {duration:10, x:-1000},0)
    .from("#g4560", {duration:10, x:-1000},0)
    .from("#g4572", {duration:10, x:-1000},0)
    .from("#g4584", {duration:10, x:-1000},0)
    .from("#g4596", {duration:10, x:-1000},0)
    .from("#g4608", {duration:10, x:-1000},0)
    this.movimiento = "transform: translate(-1000px, 0px);"
  }
}
