import { GridService } from './../services/grid.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-grid-cell',
  standalone: true,
  imports: [],
  templateUrl: './grid-cell.component.html',
  styleUrl: './grid-cell.component.css'
})
export class GridCellComponent {

  color: string = 'white';

  constructor(public gridService: GridService) {}

  onClicked(e: MouseEvent): void {
    (e.target  as HTMLElement).style.backgroundColor = this.gridService.color;
  }
}
