import { Injectable } from '@angular/core';
import { Livro } from './livro.model';

@Injectable()



export class LivroService {

  constructor() { }

  listarTodos() : Livro[]{
    const livros = localStorage['livros'];
    return livros? JSON.parse(livros) : [];
  }

  cadastrar(livro: Livro): void{
    const livros = this.listarTodos();
    livro.id = new Date().getTime();
    livros.push(livro);
    localStorage['livros'] = JSON.stringify(livros);
  }

  buscarPorId(id : number): Livro {
    const livros : Livro[] = this.listarTodos();
    return livros.find(livro => livro.id === id);

  }


}
