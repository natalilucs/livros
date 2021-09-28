import { Component, OnInit } from '@angular/core';
import { LivroService, Livro } from '../shared';

@Component({
  selector: 'app-listar-livros',
  templateUrl: './listar-livros.component.html',
  styleUrls: ['./listar-livros.component.css']
})
export class ListarLivrosComponent implements OnInit {

  livros: Livro[];

  constructor(private livroService : LivroService) { }

  ngOnInit() {
    this.livros = this.listarTodos(); 

  }
  
  listarTodos(): Livro[]{
    return this.livroService.listarTodos();

  }

}
