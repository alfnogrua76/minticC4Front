import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Mesa } from '../../../modelos/mesa.model';
import { MesasService } from '../../../servicios/mesa.service';

@Component({
  selector: 'ngx-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.scss']
})
export class EliminarComponent implements OnInit {
  modoCreacion: boolean = true;
  id_mesa: string = "";
  intentoEnvio: boolean = false;
  laMesa: Mesa = {

    numero: null,
    cantidadinscritos:null
  }

  constructor(private miServicioMesas: MesasService,
    private rutaActiva: ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {
      if (this.rutaActiva.snapshot.params.id_mesa) {
        this.modoCreacion = false;
        this.id_mesa = this.rutaActiva.snapshot.params.id_mesa;
        this.getMesa(this.id_mesa)
      }else {
        this.modoCreacion = true;
      }
    }
    getMesa(id: string) {
        this.miServicioMesas.getEstudiante(id).
        subscribe(data => {
          this.laMesa = data;
        });
    }
    agregar(): void {
      if (this.validarDatosCompletos()) {
        this.intentoEnvio = true;
        this.miServicioMesas.crear(this.laMesa).
          subscribe(data => {
            Swal.fire(
              'Creado',
              'El estudiante ha sido creado correctamente',
              'success'
            )
            this.router.navigate(["pages/mesas/listar"]);
          });
      }

    }
    editar(): void {
      this.intentoEnvio = true;
      if (this.validarDatosCompletos()) {
        this.miServicioMesas.editar(this.laMesa._id, this.laMesa).
          subscribe(data => {
            Swal.fire(
              'Actualizado',
              'El estudiante ha sido actualizado correctamente',
              'success'
            )
            this.router.navigate(["pages/mesas/listar"]);
          });
      }

    }
    validarDatosCompletos():boolean{
      this.intentoEnvio=true;
      if(this.laMesa.numero==null || this.laMesa.cantidadinscritos==null){
        return false;
      }else{
        return true;
      }
    }

}
