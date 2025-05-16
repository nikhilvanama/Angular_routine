import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer-app',
  imports: [CommonModule, FormsModule],
  templateUrl: './footer-app.component.html',
  styleUrl: './footer-app.component.css'
})
export class FooterAppComponent {
  title = 'Footer';

  @Input() parentdata: string = "";
  @Input() parentdata1: any = "";

  // @output Decorator
  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit(this.title);
  }

  // child-parent using template reference variable

  data:string = "data passed from child to parent using template reference variable";
}