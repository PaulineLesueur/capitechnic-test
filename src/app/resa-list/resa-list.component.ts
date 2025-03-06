import { Component, OnInit } from '@angular/core';
import { Resa } from '../models/resa';
import { ResaService } from '../services/resa.service';

@Component({
  selector: 'app-resa-list',
  templateUrl: './resa-list.component.html',
  styleUrls: ['./resa-list.component.sass']
})
export class ResaListComponent implements OnInit {
  resaList: Resa[] = [];

  constructor(private resaService: ResaService) {}

  ngOnInit(): void {
    this.loadResa();
  }

  loadResa(): void {
    this.resaService.findAll().subscribe(data => {
      this.resaList = data;
    })
  }
}
