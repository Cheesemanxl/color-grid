import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { GridColumnComponent } from './grid-column/grid-column.component';
import { GridService as GridService } from './services/grid.service';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    GridColumnComponent,
    ColorPickerComponent,
    CommonModule,
    MatButtonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(public cellService: GridService) {}

  clearGrid(): void {
    const elements: NodeList = document.querySelectorAll('.cell');
    (elements as NodeListOf<HTMLElement>).forEach((element: HTMLElement) => {
      element.style.backgroundColor = 'white';
    });
  }
}
