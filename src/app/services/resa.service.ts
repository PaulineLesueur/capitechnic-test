import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResaService {
  private jsonFile = './assets/api/resa.json';

  constructor(private http: HttpClient) {  }

  public findAll(): Observable<any> {
    return this.http.get<any>(this.jsonFile)
  }
}
