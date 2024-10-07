import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { PropietarioService } from '../../services/propietario.service';
import { Router } from '@angular/router';
import { Propietario } from '../../interfaces/propietario.interface';
import Swal from 'sweetalert2';
import { Ripple, Input, initTWE } from 'tw-elements';

@Component({
  selector: 'propietario-add-propietario',
  templateUrl: './add-propietario.component.html',
  styleUrl: './add-propietario.component.css',
})
export class AddPropietarioComponent implements OnInit {

  private fb = inject(FormBuilder);
  private vl = Validators;

  ngOnInit(): void {
    initTWE({ Ripple, Input });
  }

  public propietarioForm: FormGroup = this.fb.group({

    id:               [0],
    documento:        ['', [this.vl.required, this.vl.minLength(5), this.vl.maxLength(10)],],
    primerNombre:     ['', [this.vl.required]],
    segundoNombre:    [''],
    primerApellido:   ['', [this.vl.required]],
    segundoApellido:  [''],
    email: [
      '',
      [
        this.vl.required,
        this.vl.pattern(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ),
      ],
    ],
    telefono:       ['', [this.vl.required, this.vl.maxLength(10), this.vl.pattern(/^[3][0-9]{1,9}$/),],],
    direccion:      ['', [this.vl.required]],
    ingreso:        ['', [this.vl.required]],
  });

  constructor(
    private propietarioService: PropietarioService,
    private router: Router
  ) {}

  get currentPropietario(): Propietario {
    const propietario = this.propietarioForm.value as Propietario;
    return propietario;
  }

  onSubmit(): void {
    
    if (this.propietarioForm.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debes diligenciar todos los campos!',
      });
      return;
    }

    if (this.currentPropietario.id) {
      this.propietarioService.updatePropietario(this.currentPropietario).subscribe({
        next: () => {
          this.router.navigateByUrl('/dashboard/propietario/list-propietarios'),
            Swal.fire({
              title: 'Actualizado propietario!',
              text: 'Propietario actualizado con exito!',
              icon: 'success',
            });
          return;
        },
      });
    }

    this.propietarioService.addPropietario(this.currentPropietario).subscribe({
      next: () => {
        this.router.navigateByUrl('/dashboard/propietario/list-propietarios'),
          Swal.fire({
            title: 'Nuevo propietario!',
            text: 'Creado con exito!',
            icon: 'success',
          });
      },
    });
  }

  onReset(): void {
    this.propietarioForm.reset();
  }
}
