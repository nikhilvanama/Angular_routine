import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer-app',
  imports: [CommonModule],
  templateUrl: './footer-app.component.html',
  styleUrl: './footer-app.component.css'
})
export class FooterAppComponent {
  title = 'Footer';

  @Input() parentdata: string = "";
  @Input() parentdata1: any = "";

  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit(this.title);
  }
}