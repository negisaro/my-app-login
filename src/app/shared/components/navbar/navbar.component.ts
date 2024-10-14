import { Component, computed, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { createPopper } from '@popperjs/core';
import { Dropdown, Collapse, initTWE } from 'tw-elements';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})

export class NavbarComponent implements OnInit{

  ngOnInit(): void {
    initTWE({ Collapse, Dropdown });
    initFlowbite();
  }

  private authService = inject(AuthService);
  public user = computed(() => this.authService.currentUser());
  onLogout() {
    this.authService.logout();
  }

  dropdownProductShow: boolean = false;

  @ViewChild('btnDropdownProductRef', { static: false })
  btnDropdownProductRef!: ElementRef;
  @ViewChild('popoverDropdownProductRef', { static: false })
  popoverDropdownProductRef!: ElementRef;
  ngAfterViewProductInit() {
    createPopper(
      this.btnDropdownProductRef.nativeElement,
      this.popoverDropdownProductRef.nativeElement,
      {
        placement: 'bottom-start',
      }
    );
  }
  toggleDropdownProduct(_event: any) {
    if (this.dropdownProductShow) {
      this.dropdownProductShow = false;
    } else {
      this.dropdownProductShow = true;
    }
  }

  dropdownPropietariosShow: boolean = false;

  @ViewChild('btnDropdownPropietariosRef', { static: false })
  btnDropdownPropietariosRef!: ElementRef;

  @ViewChild('popoverDropdownPropietariosRef', { static: false })
  popoverDropdownPropietariosRef!: ElementRef;

  ngAfterViewPropietariosInit() {
    createPopper(
      this.btnDropdownPropietariosRef.nativeElement,
      this.popoverDropdownPropietariosRef.nativeElement,
      {
        placement: 'bottom-start',
      }
    );
  }
  toggleDropdownPropietarios(_event: any) {
    if (this.dropdownPropietariosShow) {
      this.dropdownPropietariosShow = false;
    } else {
      this.dropdownPropietariosShow = true;
    }
  }
}
