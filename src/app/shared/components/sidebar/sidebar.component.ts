import { Component, computed, inject, OnInit} from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { Dropdown, Collapse, initTWE } from 'tw-elements';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit{
  
  ngOnInit(): void {
    initTWE({ Collapse, Dropdown });
    initFlowbite();
  }

  private authService = inject( AuthService );
  public user = computed(() => this.authService.currentUser() );
  onLogout() {
    this.authService.logout();
  }
}


