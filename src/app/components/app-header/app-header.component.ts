import { Component, OnInit } from '@angular/core';
import { SidenavStateService} from '../../shared/sidenav-state.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  constructor(private sidenavStateService: SidenavStateService) { }

  ngOnInit() {
  }

  get showNavigationToggle(): boolean {
    return this.sidenavStateService.isClosable;
  }

  toggleNavigation() {
    this.sidenavStateService.toggleNavigation();
  }
}