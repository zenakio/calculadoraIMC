import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-imc',
  imports: [FormsModule, CommonModule],
  templateUrl: './imc.html',
  styleUrl: './imc.css',
})
export class Imc {
  peso: number = 0;
  altura: number = 0;
  imc: number = 0;
  resultado: String = '';
  calcularIMC() {
    if (this.peso > 0 && this.altura > 0) {
      this.imc = this.peso / (this.altura * this.altura);
      if (this.imc < 18.5) {
        this.resultado = "Abaixo do peso normal.";
      } else if (this.imc < 24.9) {
        this.resultado = "Peso normal.";
      }
      else if (this.imc < 29.9) {
        this.resultado = "Excesso de peso.";
      } else {
        this.resultado = "Obesidade.";
      }
    }
  }
}
