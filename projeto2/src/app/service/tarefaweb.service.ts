import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TarefawebService {

  constructor(private http: HttpClient) { }

  ObterTarefas(){
    return this.http.get("http://www.professorisidro.com.br/tarefas.php");
  }

}


