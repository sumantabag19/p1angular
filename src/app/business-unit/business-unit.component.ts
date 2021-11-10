import { ConfirmDialogueComponent } from './../@shared/confirm-dialogue/confirm-dialogue.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertService } from '@app/@shared';
import { Pagination } from '@app/@shared/_models/pagination';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { finalize } from 'rxjs/operators';
import { KeyValuePair } from './../@shared/_models/key-value-pair';
import { CredentialsService } from './../auth/_services/credentials.service';
import { EditBuComponent } from './edit-bu/edit-bu.component';
import { BusinessUnit } from './_models/business-unit';
import { BusinessUnitService } from './_services/business-unit.service';

@Component({
  selector: 'app-business-unit',
  templateUrl: './business-unit.component.html',
  styleUrls: ['./business-unit.component.scss'],
})
export class BusinessUnitComponent implements OnInit {
  bunits: BusinessUnit[] = [];
  pagination: Pagination;
  userParams: any = {
    order: '',
    orderBy: '',
    searchText: '',
  };
  isLoading = false;

  bsModalRef: BsModalRef;
  config = {
    animated: true,
  };

  parentBulist: KeyValuePair[] = [];

  constructor(
    private route: ActivatedRoute,
    private buService: BusinessUnitService,
    private credService: CredentialsService,
    private modalService: BsModalService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.route.data.subscribe((response) => {
      this.bunits = response.data.result;
      this.pagination = response.data.pagination;
      this.isLoading = false;
    });
  }

  initParentBUList() {
    this.parentBulist = [];
    this.buService
      .getAll(this.credService.orgId)
      .pipe(finalize(() => {}))
      .subscribe((list: BusinessUnit[]) => {
        list.forEach((bu) => {
          this.parentBulist.push({ id: bu.id, value: bu.buName });
        });
      });
  }

  openEditModal(editMode: boolean, businessUnit: BusinessUnit) {
    this.initParentBUList();

    const initialState = {
      list: this.parentBulist,
      bu: businessUnit,
      title: !editMode ? 'Add Business Unit' : 'Edit Business Unit',
    };
    this.bsModalRef = this.modalService.show(EditBuComponent, { initialState, animated: true, class: 'modal-lg' });
    this.bsModalRef.content.closeBtnName = 'Close';

    this.bsModalRef.content.event.subscribe((response: any) => {
      if (response) {
        this.alertService.success(
          !editMode ? 'Business unit addition successful.' : 'Business unit updation successful.'
        );
        this.loadUnits(this.pagination.pageNumber, this.pagination.pageSize, this.userParams);
      }
    });
  }

  pageChanged(event: Pagination) {
    this.loadUnits(event.pageNumber, event.pageSize, this.userParams);
  }

  pageSizeChanged() {
    this.pagination.pageNumber = 1;
    this.loadUnits(this.pagination.pageNumber, this.pagination.pageSize, this.userParams);
  }

  applyFilter() {
    this.loadUnits(this.pagination.pageNumber, this.pagination.pageSize, this.userParams);
  }

  loadUnits(page: number, itemsPerPage: number, params: any) {
    this.isLoading = true;
    this.buService
      .filter(this.credService.orgId, page, itemsPerPage, params)
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe(
        (response: { result: any; pagination: Pagination }) => {
          this.bunits = response.result;
          this.pagination = response.pagination;
        },
        (error: any) => {
          this.alertService.error(error);
        }
      );
  }

  confirm(id: number) {
    this.bsModalRef = this.modalService.show(ConfirmDialogueComponent, {});
    this.bsModalRef.content.event.subscribe((response: any) => {
      if (response) {
        this.delete(id);
      }
    });
  }

  delete(id: number) {
    this.isLoading = true;
    this.buService
      .delete(id, this.credService.orgId)
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe(
        () => {
          this.loadUnits(this.pagination.pageNumber, this.pagination.pageSize, this.userParams);
        },
        (error) => {
          this.alertService.error(error);
        }
      );
  }
}
