import {Component, OnInit} from '@angular/core';
import {Cliente} from '../../shared/model/cliente';
import {ClienteService} from '../../shared/services/cliente.service';

@Component({
  selector: 'app-listagem-cliente',
  templateUrl: './listagem-cliente.component.html',
  styleUrls: ['./listagem-cliente.component.scss']
})
export class ListagemClienteComponent implements OnInit {

  clientes: Cliente[];

  constructor(private clienteService: ClienteService) {
    this.clientes = new Array<Cliente>();
  }

  ngOnInit(): void {
    this.clienteService.list().subscribe(
      clientes => this.clientes = clientes
    );
  }

  removerCliente(cliente: Cliente) {
    this.clienteService.remover(cliente.id || 0).subscribe(
      removido => {
        const indxCliente = this.clientes.findIndex(u => u.id === cliente.id);

        if (indxCliente > -1) {
          this.clientes.splice(indxCliente, 1);
        }
      }
    );
  }
}
