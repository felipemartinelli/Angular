import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../model/Tarefa';
import { TarefawebService } from '../service/tarefaweb.service';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit {

 /* minhaTarefa: Array<Tarefa>;*/
  
  minhaTarefa: Tarefa[];

  //injetando o serviço
  
  constructor(private servicoLista: TarefawebService) { 
  /*  this.minhaTarefa = new Array<Tarefa>();
    this.minhaTarefa.push(new Tarefa("Tarefa #1","Professor Isidro"));
    this.minhaTarefa.push(new Tarefa("Tarefa #2","aaaaa"));
    this.minhaTarefa.push(new Tarefa("Tarefa #3","bbbbb"));
    this.minhaTarefa.push(new Tarefa("Tarefa #4","ccccc"));
    this.minhaTarefa.push(new Tarefa("Tarefa #5","ddddd"));*/




    console.log(this.minhaTarefa)
  }

  ngOnInit() {
    this.ObterTodasAsTarefas();
  }

  public ObterTodasAsTarefas(){
    this.servicoLista.ObterTarefas().subscribe((resultado: Tarefa[])=>{this.minhaTarefa = resultado});
  }

}
