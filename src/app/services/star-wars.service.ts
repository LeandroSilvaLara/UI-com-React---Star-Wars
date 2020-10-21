import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {  HttpClient } from '@angular/common/http';
import { Request } from '../models/Request';

@Injectable({
  providedIn: "root",
})
export class StarWarsService {
  constructor(private http: HttpClient) {}

  baseUrl =  "https://swapi.dev/api/people/";
  string = 'https://viacep.com.br/ws/70077900/json/';

  lisPersonagens(): Observable<Request> {
    return this.http.get<Request>(this.baseUrl);
  }

  get():Observable<any> {
    return this.http.get<any>(this.string);
  }
  
}
