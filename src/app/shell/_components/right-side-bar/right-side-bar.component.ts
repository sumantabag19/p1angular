import { Component, OnInit } from '@angular/core';
import { AlertService } from '@app/@shared';
import { MenuService } from './../../_services/menu.service';
import { Menu } from './../../_models/menu';

@Component({
  selector: 'app-right-side-bar',
  templateUrl: './right-side-bar.component.html',
  styleUrls: ['./right-side-bar.component.scss'],
})
export class RightSideBarComponent implements OnInit {
  menuList: Menu[] = [];
  selectedTabName: string = 'EvA_Apps_Tab';
  constructor(private menuService: MenuService, private alertService: AlertService) {}

  ngOnInit() {
    // this.menuService.getMenues().subscribe(
    //   (list: Menu[]) => {
    //     const index = list.findIndex((x) => x.menuName.toLowerCase() === 'dashboard');
    //     if (index >= 0) list.splice(index, 1);
    //     this.menuList = list;
    //     console.log(this.menuList);
    //   },
    //   (error) => {
    //     this.alertService.error('Failed to load menues');
    //   }
    // );
  }
  clickTabEvent(tabId: string) {
    this.selectedTabName = tabId;
  }
}
