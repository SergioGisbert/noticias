import { Component } from '@angular/core';
import { NoticiaService } from './services/noticia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listNoticias: any[] = [];
  mostrarSpinner = false;
  constructor(private _noticiaService: NoticiaService){}

  buscarNoticias(parametros: any){
    this.mostrarSpinner = true;
    this.listNoticias = [];
    setTimeout(() =>{
      this._noticiaService.getNoticias(parametros).subscribe(data =>{
        this.mostrarSpinner = false;
        console.log(data)
        this.listNoticias = data.articles;
      },error =>{
        console.log(error)
        this.mostrarSpinner = false;
      })
    },1000)
    
  }
}
