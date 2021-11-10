import { AddPopupComponent } from './../add-popup/add-popup.component';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService, CredentialsService } from '@app/auth';
import { ProfileHostDirective } from '@app/shell/_directives/profile-host.directive';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit, OnDestroy {
  get username(): string | null {
    const currentUser = this.credentialsService.currentUser;
    return currentUser ? currentUser.name : null;
  }
  menuHidden = true;
  opened = true;
  modeNum = 1;
  positionNum = 0;
  dock = false;
  closeOnClickOutside = false;
  closeOnClickBackdrop = false;
  showBackdrop = false;
  animate = true;
  trapFocus = true;
  autoFocus = true;
  keyClose = false;
  autoCollapseHeight: number = null;
  autoCollapseWidth: number = null;

  MODES: Array<string> = ['over', 'push', 'slide'];
  POSITIONS: Array<string> = ['left', 'right', 'top', 'bottom'];
  title = 'appBootstrap';
  closeResult: string;
  _opened = false;
  _modeNum = 0;
  _positionNum = 1;
  _closeOnClickOutside = true;
  _closeOnClickBackdrop = true;
  _showBackdrop = true;

  _MODES: Array<string> = ['over', 'push', 'slide'];
  _POSITIONS: Array<string> = ['left', 'right', 'top', 'bottom'];

  @ViewChild(ProfileHostDirective, { static: true })
  profileHost: ProfileHostDirective;
  mode = '';

  bsModalRef: BsModalRef;
  config = {
    animated: true,
  };

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private credentialsService: CredentialsService,
    private bsModalService: BsModalService
  ) {}
  ngOnDestroy(): void {}

  ngOnInit() {}

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }

  logout() {
    this.authenticationService.logout().subscribe(() => this.router.navigate(['/login'], { replaceUrl: true }));
  }

  toggleOpened(): void {
    this.opened = !this.opened;
  }

  openAddMenu() {
    const initialState = {};
    this.bsModalRef = this.bsModalService.show(AddPopupComponent, { initialState, animated: true, class: 'modal-lg' });
    // this.bsModalRef.content.closeBtnName = 'Close';

    this.bsModalRef.content.event.subscribe((mode: any) => {
      if (mode) {
        this.bsModalRef.hide();
        this._toggleOpened(mode);
      }
    });
  }

  _toggleOpened(mode?: string): void {
    /* mode :
    app :  application panel,
    contact :  add contact,
    opportunity : add opportunity
    */
    this.mode = mode;
    if (this.mode !== '') this._opened = !this._opened;
  }
}
