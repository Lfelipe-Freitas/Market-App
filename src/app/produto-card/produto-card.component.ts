import { AppComponent } from './../app.component';
import { Produto } from './../interfaces/Produto';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'produto-card',
  templateUrl: './produto-card.component.html',
  styleUrls: ['./produto-card.component.css']
})
export class ProdutoCardComponent implements OnInit {

  @Input()
  prod: Produto = {
    descricao: "",
    estoque: 0,
    imagem: "",
    nome: "",
    preco: 0
  }
  @Output()
  deletar: EventEmitter<Produto> = new EventEmitter<Produto>()
  mostrarProduto: boolean = true

  mostrar(): void {
    this.mostrarProduto = false
  }

  emitirEventoDeletar(): void {
    this.deletar.emit(this.prod)
  }

  mostrarOculto(): void {
    this.mostrarProduto = true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
