import { Component, Input } from '@angular/core';
import {Http} from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})
export class ListagemComponent { 
    
    fotos: Object[] = [];

    constructor(/*@Inject(Http) http*/http: Http){
        http
        .get('v1/fotos')
        .map(res=>  res.json())
        .subscribe(fotos => {
            this.fotos = fotos;
        },erro => console.log(erro))
    }
}