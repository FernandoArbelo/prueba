import { Injectable } from '@angular/core';
import { ItemLista } from '../share/item-lista';

@Injectable()
export class ListaService {

  constructor() { 

  }

  get():ItemLista[]{
    var lista:ItemLista[];
    lista = new Array();
    lista.push(new ItemLista("10:00","Niños","Taller de color en DAS",""));
    lista.push(new ItemLista("11:00","Adolecentes-Adultos","Yoga en salón espejos",""));    
    return lista;
  }
}