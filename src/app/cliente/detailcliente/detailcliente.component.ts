import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/Cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { Global } from 'src/app/services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detailcliente',
  templateUrl: './detailcliente.component.html',
  styleUrls: ['./detailcliente.component.css'],
  providers: [ClienteService]
})
export class DetailclienteComponent implements OnInit {

  public cliente!: Cliente;
  public confirm!: boolean;

  constructor(
    private clienteService: ClienteService,
    private router:Router,
    private route: ActivatedRoute
  ) { 
    this.confirm = false;
  }

  ngOnInit(){
    this.route.params.subscribe((params) => {
      let idcliente = params['idcliente'];

      this.getCliente(idcliente);
    });
  }

  getCliente(idcliente: any){
    this.clienteService.getCliente(idcliente).subscribe(
      (res) => {
        this.cliente = res;
        console.log(res);
      },
      (err) => {
        console.log(<any>err);
      }
    );
  }

  setConfirm(confirm: boolean){
    this.confirm = confirm;
  }

  deleteCliente(idcliente: any){
  this.clienteService.deleteCliente(idcliente).subscribe(
   res => {        
    console.log(res);
    this.router.navigate(['/clientes']);
  },
   err => {
     console.log(<any>err);
   }
  );
  }

}
