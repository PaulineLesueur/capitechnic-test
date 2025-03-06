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
  visible = false;
  resaData: Resa | undefined;

  constructor(private resaService: ResaService) {}

  ngOnInit(): void {
     this.resaService.refreshResaList();
     this.resaService.resaList$.subscribe(data => {
      this.resaList = data;
    });
  }

  showDialog(resa: Resa) {
    this.visible = true;
    this.resaData = resa;
  }
}
