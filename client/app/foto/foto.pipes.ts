import { Pipe, PipeTransform } from '@angular/core';
import { FotoComponent } from './foto.component';


@Pipe({
    name:'filtroPorTitulo'
})
export class FiltroPorTitulo implements PipeTransform {

    transform(fotos:FotoComponent[] ,digitado: string){
        digitado = digitado ? digitado.toLowerCase() : "";

        let fotoFiltrado = fotos;


        return fotoFiltrado.filter((foto, index) => foto.titulo ? foto.titulo.toLowerCase().includes(digitado) : "");
        

    }
    
}