 import { LightningElement } from 'lwc';

 export default class Lwc31 extends LightningElement {
     nome;
     peso;
     altura;
     resultado;

     pegaNome(event) {
         this.nome = event.detail.value;
         console.log(this.nome)
     }

     pegaPeso(event) {
         this.peso = event.detail.value;
         console.log(this.peso)
     }
     pegaAltura(event) {
         this.altura = event.detail.value
         console.log(this.altura);
     }

     imc() {
         this.resultado = this.peso / (this.altura * this.altura)
         console.log(this.resultado);

     }
 }