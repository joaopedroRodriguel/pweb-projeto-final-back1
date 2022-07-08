import {Component, OnInit} from '@angular/core';
import {Cliente} from '../../shared/model/cliente';
import {ClienteService} from '../../shared/services/cliente.service';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.scss']
})
export class CadastroClienteComponent implements OnInit {
  clientes: Cliente;


  constructor(
    private clienteService: ClienteService
  ) {
    this.clientes = new Cliente();
  }


  ngOnInit(): void {
  }

  inserirCliente(): void {
    this.clienteService.create(this.clientes).subscribe(
      cliente => console.log(cliente)
    );
    this.clientes = new Cliente();
  }

}
