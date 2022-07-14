import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/Cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { Global } from 'src/app/services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { param } from 'jquery';

@Component({
  selector: 'app-editarcliente',
  templateUrl: '../createCliente/createCliente.component.html',
  styleUrls: ['./editarcliente.component.css'],
  providers: [ClienteService]
})
export class EditarclienteComponent implements OnInit {

  public title!: string;
  public save_cliente: any;
  public status!: string;

  public cliente: Cliente = {
    idcliente: 0,
    nombres: '',
    telefono: 0,
    fecha: '',
    direccion: '',
    correo: '',
    datetimeCreated: ''
  };
  
  constructor(
    private clienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.title = "Editar Proveedor";
  }

  ngOnInit() {
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

  onSubmit(form: { reset: () => void; }){
    
    this.clienteService.editCliente(this.cliente)
        .subscribe(
          res => {
            console.log(res);
            this.save_cliente = res.cliente;


            this.status = 'success';
            form.reset();
          },
          err => console.error(err)
        )
    console.log(this.cliente);
  }

}
