import { Component, OnInit } from '@angular/core';
import { Dropdown, Collapse, initTWE } from 'tw-elements';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'dashboard-layout-component',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css'],
})

export class DashboardLayoutComponent implements OnInit {
  ngOnInit(): void {
    initTWE({ Collapse, Dropdown });
    initFlowbite();
  }
}
