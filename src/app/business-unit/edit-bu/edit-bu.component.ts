import { BusinessUnitService } from './../_services/business-unit.service';
import { BusinessUnit } from './../_models/business-unit';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { finalize } from 'rxjs/operators';
import { AlertService } from '@app/@shared';
import { Logger } from '@app/@core';
import { KeyValuePair } from '@app/@shared/_models/key-value-pair';
import { CredentialsService } from '@app/auth';

const log = new Logger('EditBuComponent');

@Component({
  selector: 'app-edit-bu',
  templateUrl: './edit-bu.component.html',
  styleUrls: ['./edit-bu.component.scss'],
})
export class EditBuComponent implements OnInit {
  get f() {
    return this.editForm.controls;
  }
  title: string;
  bu: BusinessUnit;
  list: KeyValuePair[] = [];
  closeBtnName: string;

  isLoading = false;
  editForm: FormGroup;

  public event: EventEmitter<any> = new EventEmitter();

  constructor(
    public bsModalRef: BsModalRef,
    private fb: FormBuilder,
    private credService: CredentialsService,
    private busService: BusinessUnitService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.editForm = this.fb.group({
      buName: [this.bu.buName, [Validators.required, Validators.maxLength(100)]],
      parentBuId: [this.bu.parentBuId],
      emailId: [this.bu.emailId, [Validators.required, Validators.email, Validators.maxLength(50)]],
      website: [
        this.bu.website,
        [
          Validators.maxLength(50),
          Validators.pattern(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/),
        ],
      ],
      buAlias1: [this.bu.buAlias1, Validators.maxLength(25)],
      buAlias2: [this.bu.buAlias2, Validators.maxLength(25)],
      buAlias3: [this.bu.buAlias3, Validators.maxLength(25)],
    });
  }

  triggerSubmitEvent(success: boolean) {
    this.event.emit(success);
  }

  onSubmit() {
    if (this.editForm.invalid) return;
    log.info('validation successful...');

    this.isLoading = true;
    this.bu = Object.assign(this.bu, this.editForm.value);

    if (this.bu.id > 0) {
      this.update();
    } else {
      this.add();
    }
  }

  add() {
    this.busService
      .add(this.bu, this.credService.orgId)
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe(
        (response) => {
          log.info(response);
          this.triggerSubmitEvent(true);
          this.bsModalRef.hide();
        },
        (error) => {
          this.alertService.error(error);
        }
      );
  }

  update() {
    this.busService
      .update(this.bu, this.bu.id, this.credService.orgId)
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe(
        (response) => {
          log.info(response);
          this.triggerSubmitEvent(true);
          this.bsModalRef.hide();
        },
        (error) => {
          this.alertService.error(error);
        }
      );
  }

  onReset() {
    this.editForm.reset();
    this.bsModalRef.hide();
  }
}
