import { Component } from '@angular/core';
import { ResaService } from '../services/resa.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
  constructor(private resaService: ResaService) {}

  refresh(): void {
    this.resaService.refreshResaList();
  }
}
