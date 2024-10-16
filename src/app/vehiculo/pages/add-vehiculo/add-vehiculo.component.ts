import { Component,   inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VehiculoService } from '../../services/vehiculo.service';
import { ActivatedRoute, Router } from '@angular/router';

import { PropietarioService } from '../../../propietario/services/propietario.service';
import { Propietario } from '../../../propietario/interfaces/propietario.interface';
import { Vehiculo } from '../../interfaces/vehiculo.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'vehiculo-add-vehiculo',
  templateUrl: './add-vehiculo.component.html',
  styleUrl: './add-vehiculo.component.css',
})
export class AddVehiculoComponent implements OnInit {
  title: string = 'Agregar Vehiculo';
  private fb = inject(FormBuilder);
  private vl = Validators;

  propietarios: Propietario[] = [];
  vehiculos: Vehiculo[] = [];

  ngOnInit(): void {
    this.dataPropietario();
    this.dataVehiculos();
    this.onUpdate();
  }

  public vehiculoForm: FormGroup = this.fb.group({
    id: [0],
    placa: ['', [this.vl.required, this.vl.minLength(6)]],
    marca: ['', [this.vl.required]],
    modeloAnio: ['', [this.vl.required]],
    modeloCarroceria: ['', [this.vl.required]],
    tipoCombustible: ['', [this.vl.required]],

    propietario: this.fb.group({
      id: [0, [this.vl.required]],
    }),
  });

  constructor(
    private vehiculoService: VehiculoService,
    private propietarioService: PropietarioService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  get currentVehiculo(): Vehiculo {
    const vehiculo = this.vehiculoForm.value as Vehiculo;
    return vehiculo;
  }

  dataPropietario(): void {
    this.propietarioService.getPropietario().subscribe((propietarios) => (this.propietarios = propietarios));
  }

  dataVehiculos(){
    this.vehiculoService.getPVehiculo().subscribe((vehiculos) => (this.vehiculos = vehiculos));
  }

  onSubmit(): void {

    if (this.vehiculoForm.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debes diligenciar todos los campos!',
      });
      return;
    }

    if (this.currentVehiculo.id) {
      this.vehiculoService.updateVehiculo(this.currentVehiculo).subscribe({
        next: () => {
          this.router.navigateByUrl('/dashboard/vehiculo/list-vehiculos'),
            Swal.fire({
              title: 'Actualizado vehiculo!',
              text: 'Vehiculo actualizado con exito!',
              icon: 'success',
            });
          return;
        },
      });
    }

    this.vehiculoService.addVehiculo(this.currentVehiculo).subscribe({
      next: (vehiculo) => {
        console.log(vehiculo);
        this.router.navigateByUrl('/dashboard/vehiculo/list-vehiculos'),
          Swal.fire({
            title: 'Creado nuevo vehiculo!',
            text: 'Vehiculo creado con exito!',
            icon: 'success',
          });
      },
    });
  }

  onReset(): void {
    this.vehiculoForm.reset();
  }

  onUpdate() {
    this.route.paramMap.subscribe((params) => {
      const id: number = +(params.get('id') || '0');
      if (id > 0) {
        this.title = 'Actualizar Vehiculo';
        this.vehiculoService.findById(id).subscribe((data) => {          
          this.vehiculoForm.patchValue({
            id: data.id,
            placa: data.placa,
            marca: data.marca,
            modeloAnio: data.modeloAnio,
            modeloCarroceria: data.modeloCarroceria,
            tipoCombustible: data.tipoCombustible,
            propietario: this.fb.group({
              id: data.propietario.id,
            }),
          });
        });
      }
    });
  }
}
