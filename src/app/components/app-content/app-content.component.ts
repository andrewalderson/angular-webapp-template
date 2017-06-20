import { Component, OnInit } from '@angular/core';

import { SidenavStateService } from "../../shared/sidenav-state.service";

@Component({
  selector: 'app-content',
  templateUrl: './app-content.component.html',
  styleUrls: ['./app-content.component.scss']
})
export class AppContentComponent implements OnInit {

  constructor(private sidenavStateService: SidenavStateService) {

  }

  ngOnInit() {
  }

  get navigationOpened(): boolean {
    return this.sidenavStateService.isOpen;
  }

  get navigationMode(): string {
    return this.sidenavStateService.isClosable ? 'over' : 'side';
  }
}