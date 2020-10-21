import { Component, OnInit } from '@angular/core';
import { Request } from '../models/Request';
import { StarWarsService } from '../services/star-wars.service';

@Component({
  selector: 'app-star-wars',
  templateUrl: './star-wars.component.html',
  styleUrls: ['./star-wars.component.css']
})
export class StarWarsComponent implements OnInit {

  mostrar = true;
  requests: Request[] = [];
  request: Request = new Request();

  constructor(
    private starWars: StarWarsService
  ) { }

  ngOnInit() {
    this.listPersonagens();
  }

  mostrarLista() {
    this.mostrar = !this.mostrar;
  }

  remover(index: number) {
    this.request.results.splice(index, 1);
  }

  listPersonagens() {
    this.starWars.lisPersonagens().subscribe(
      (listPersonagens: Request) => {
        this.request = listPersonagens;
      }, error => { console.log(error); }
    );
  }

}
