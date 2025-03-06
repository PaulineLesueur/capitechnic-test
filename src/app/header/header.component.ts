import { Component } from '@angular/core';
import { ResaService } from '../services/resa.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
  isLoading = false;
  
  constructor(private resaService: ResaService) {}

  refresh(): void {
    if(this.isLoading) return;

    this.isLoading =true;
    this.resaService.refreshResaList();

    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }
}
