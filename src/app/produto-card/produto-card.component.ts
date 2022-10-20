import { Produto } from './../interfaces/produto';
import { Component, Input, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
