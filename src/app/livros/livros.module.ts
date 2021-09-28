import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivroService } from './shared';
import { ListarLivrosComponent } from './listar';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CadastrarLivroComponent } from './cadastrar/cadastrar-livro.component';



@NgModule({
  declarations: [
    ListarLivrosComponent,
    CadastrarLivroComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    LivroService
  ]
  
})
export class LivrosModule { }
