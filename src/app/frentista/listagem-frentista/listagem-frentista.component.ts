import { Component, OnInit } from '@angular/core';
import {Frentista} from '../../shared/model/frentista';
import {FrentistaService} from '../../shared/services/frentista.service';

@Component({
  selector: 'app-listagem-frentista',
  templateUrl: './listagem-frentista.component.html',
  styleUrls: ['./listagem-frentista.component.scss']
})
export class ListagemFrentistaComponent implements OnInit {

  frentistas: Frentista[];

  constructor(private frentistaService: FrentistaService) {
    this.frentistas = new Array<Frentista>();
  }

  ngOnInit(): void {
    this.frentistaService.list().subscribe(
      frentistas => this.frentistas = frentistas
    );
  }

  removerFrentista(frentista: Frentista) {
    this.frentistaService.remover(frentista.id || 0).subscribe(
      removido => {
        const indxFrentista = this.frentistas.findIndex(u => u.id === frentista.id);

        if (indxFrentista > -1) {
          this.frentistas.splice(indxFrentista, 1);
        }
      }
    );
  }



}
