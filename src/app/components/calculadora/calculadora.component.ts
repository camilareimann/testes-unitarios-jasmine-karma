import { Component } from '@angular/core';
import { CalculadoraService } from '../../services/calculadora.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  num1: number = 0;
  num2: number = 0;
  result: number = 0;

  constructor(private calculadoraService: CalculadoraService) { }

  calculate(): void {
    this.result = this.calculadoraService.somar(this.num1, this.num2);
  }

  subtrairValor(): void {
    this.result = this.calculadoraService.subtrair(this.num1, this.num2);
  }

  multiplicarValor(): void {
    this.result = this.calculadoraService.multiplicar(this.num1, this.num2);
  }

  dividirValor(): void {
    this.result = this.calculadoraService.dividir(this.num1, this.num2);
  }
}