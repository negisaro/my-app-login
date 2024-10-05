import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Datepicker } from 'flowbite';
import type { DatepickerOptions, DatepickerInterface } from 'flowbite';
import type { InstanceOptions } from 'flowbite';
import { VehiculoService } from '../../services/vehiculo.service';
import { Router } from '@angular/router';
import { Propietario, Vehiculo } from '../../interfaces/vehiculo.interface';
import Swal from 'sweetalert2';
import { PropietarioService } from '../../../propietario/services/propietario.service';

@Component({
  selector: 'vehiculo-add-vehiculo',
  templateUrl: './add-vehiculo.component.html',
  styleUrl: './add-vehiculo.component.css',
})
export class AddVehiculoComponent implements OnInit {
  
  private fb = inject( FormBuilder );
  propietarios: Propietario[] = [];
  datepicker: any;

  public vehiculoForm: FormGroup = this.fb.group({

    id:               [0, [Validators.required]],
    placa:            ['', [Validators.required]],
    marca:            ['', [Validators.required]],
    modeloAnio:       ['', [Validators.required]],
    modeloCarroceria: ['', [Validators.required]],
    tipoCombustible:  ['', [Validators.required]],
    propietario:      ['', [Validators.required]],
  });

  constructor(
    private vehiculoService: VehiculoService,
    private propietarioService: PropietarioService,
    private router: Router
  ) {}

   dataVehiculos(): void {
    this.propietarioService.getPropietario().subscribe((propietarios) => (this.propietarios = propietarios));
    console.log(this.propietarios);
  }

  get currentVehiculo(): Vehiculo {
    const vehiculo = this.vehiculoForm.value as Vehiculo;
    return vehiculo;

  }

  onSubmit(): void {
    if (this.vehiculoForm.invalid) return;

    if (this.currentVehiculo.id) {
      this.vehiculoService.updateVehiculo(this.currentVehiculo).subscribe({
        next: (vehiculo) => {
          console.log(vehiculo);
          this.router.navigate(['/dashboard/vehiculo/list-vehiculos']);
        },
      });
      Swal.fire({
        title: 'Actualizado vehiculo!',
        text: 'Vehiculo actualizado con exito!',
        icon: 'success',
      });
      return;
    }
    this.vehiculoService.addVehiculo(this.currentVehiculo).subscribe({
      next: (vehiculo) => {
        console.log(vehiculo);
        this.router.navigate(['/dashboard/vehiculo/list-vehiculos']);
      },
    });
    Swal.fire({
      title: 'Creado nuevo vehiculo!',
      text: 'Vehiculo creado con exito!',
      icon: 'success',
    });
  }

  ngOnInit(): void {
    this.dataVehiculos();
    // set the target element of the input field or div
    const $datepickerEl: HTMLInputElement = document.getElementById(
      'datepicker-custom'
    ) as HTMLInputElement;

    // optional options with default values and callback functions
    const options: DatepickerOptions = {
      defaultDatepickerId: null,
      autohide: true,
      format: 'yyyy-mm-dd',
      maxDate: null,
      minDate: null,
      orientation: 'bottom',
      buttons: false,
      autoSelectToday: 0,
      title: 'Año Modelo',
      rangePicker: false,
      onShow: () => {},
      onHide: () => {},
    };

    // instance options object
    const instanceOptions: InstanceOptions = {
      id: 'datepicker-custom-example',
      override: true,
    };

    /*
     * $datepickerEl: required
     * options: optional
     * instanceOptions: optional
     */
    const datepicker: DatepickerInterface = new Datepicker(
      $datepickerEl,
      options,
      instanceOptions
    );

    // get the currently selected date (undefined if not selected)
    this.datepicker.getDate();

    // set the date (or dates if date range picker)
    this.datepicker.setDate('05/31/2024');

    // programatically show the datepicker
    this.datepicker.show();

    // programatically hide the datepicker
    this.datepicker.hide();

    // use this method to get the parent datepicker instance from https://mymth.github.io/vanillajs-datepicker/#/
    this.datepicker.getDatepickerInstance();
  }
}
