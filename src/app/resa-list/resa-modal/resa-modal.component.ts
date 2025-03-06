import { Component, Input } from '@angular/core';
import { Resa } from 'src/app/models/resa';

@Component({
  selector: 'app-resa-modal',
  templateUrl: './resa-modal.component.html',
  styleUrls: ['./resa-modal.component.sass']
})
export class ResaModalComponent {
  @Input() resaToDisplay: Resa | undefined
}
