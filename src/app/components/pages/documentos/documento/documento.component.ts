import { Component, OnInit, enableProdMode } from '@angular/core';

if(!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  selector: 'app-documento',
  templateUrl: './documento.component.html',
  styleUrls: ['./documento.component.css']
})
export class DocumentoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
