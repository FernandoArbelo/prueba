import { Component, OnInit } from '@angular/core';
import { ListaService } from '../../services/lista.service';
import { ItemLista } from '../../share/item-lista';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  private listaS:ListaService;
  protected lista:ItemLista[];

  constructor() { 
    this.listaS = new ListaService();
    this.lista = this.listaS.get();
    console.log(this.lista,"dasda");
  }

  ngOnInit() {
  }

}
