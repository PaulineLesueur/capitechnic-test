import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Resa } from '../models/resa';

@Injectable({
  providedIn: 'root'
})
export class ResaService {
  private jsonFile = './assets/api/resa.json';
  private resaSubject = new BehaviorSubject<Resa[]>([]); 
  public resaList$: Observable<Resa[]> = this.resaSubject.asObservable(); 

  constructor(private http: HttpClient) {  }

  public findAll(): Observable<any> {
    return this.http.get<any>(this.jsonFile)
  }

  refreshResaList(): void {
    this.findAll().subscribe(data => {
      this.resaSubject.next(data); 
    });
  }
}
