import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { Global } from '../services/global';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
  providers: [ClienteService]
})
export class ClienteComponent implements OnInit {

  allClientes: any =[];
  clientes: any = [];
  search = ' ';

  constructor(private clienteService: ClienteService) { }

  ngOnInit(){
    this.loadCliente();
  }

  loadCliente(){
    const filter = (typeof this.search == 'string' && this.search.length > 0) ? `?searchBy=${this.search}` :  '';

    console.log(filter);
    
    this.clienteService.getClientes(filter).subscribe(
      (res)=>{
        this.allClientes = res;
      },
      (error) => {
        console.log('Error', error);
      }
    )
  }

}
