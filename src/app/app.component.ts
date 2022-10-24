import { Produto } from './interfaces/Produto';
import { Component } from '@angular/core';
import { ProdutoCardComponent } from './produto-card/produto-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'diretivas';
  nome: string = ""
  imagem: string = ""
  preco: number = 0
  estoque: number = 0
  descricao: string = ""

  produtos: Produto[] = []

  adicionarProdutos(evento: any): void {
    console.log(evento)
    evento.stopPropagation()
    evento.preventDefault() //só seria necessário se estivesse dando refresh na página por causa do form
    this.produtos.push({
      descricao: this.descricao,
      estoque: this.estoque,
      imagem: this.imagem,
      nome: this.nome,
      preco: this.preco
    })
    this.nome = ""
    this.descricao = ""
    this.estoque = 0
    this.preco = 0
    this.imagem = ""
  }

  deletarProduto(p: Produto): void {
    const index = this.produtos.indexOf(p)
    this.produtos.splice(index, 1)
  }
}
