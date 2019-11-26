import { Component, ViewChild, enableProdMode } from '@angular/core';

import { DxDiagramComponent } from 'devextreme-angular';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  selector: 'app-flujograma',
  templateUrl: './flujograma.component.html',
  styleUrls: ['./flujograma.component.css']
})
export class FlujogramaComponent {
  @ViewChild(DxDiagramComponent, { static: false }) diagram: DxDiagramComponent;
  constructor() { }

}
