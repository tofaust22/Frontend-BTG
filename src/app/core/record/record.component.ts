import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrl: './record.component.css'
})
export class RecordComponent {
  @Input() title: string = '';
  @Input() isOpen: boolean = false;

  closeModal() {
    this.isOpen = false;
  }
}
