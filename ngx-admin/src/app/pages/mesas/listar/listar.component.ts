import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Mesa } from '../../../modelos/mesa.model';
import { MesasService } from '../../../servicios/mesa.service';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  mesas : Mesa[];
  nombresColumnas: string[] = ['numero','cantidadinscritos'];
  constructor(private miServicioMesas: MesasService,
              private router: Router) { }

  ngOnInit(): void {
    this.listar();
  }
  listar():void{
    this.miServicioMesas.listar().
      subscribe(data => {
        this.mesas=data;
      });
  }
  agregar():void{
    this.router.navigate(["pages/mesas/crear"]);
    console.log("agregando nuevo")
  }
  editar(id:string):void{
    this.router.navigate(["pages/mesas/listar/"+id]);
    console.log("editando a "+id)
  }
  eliminar(id:string):void{
    Swal.fire({
      title: 'Eliminar Mesa',
      text: "Está seguro que quiere eliminarla?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.miServicioMesas.eliminar(id).
          subscribe(data => {
            Swal.fire(
              'Eliminado!',
              'La mesa ha sido eliminada correctamente',
              'success'
            )
            this.router.navigate(["pages/mesas/listar"]);
           // this.ngOnInit();
          });
      }
    })
  }
}
