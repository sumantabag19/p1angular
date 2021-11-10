import { MapsAPILoader } from '@agm/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GeolocationComponent } from '../geolocation/geolocation.component';
//import { MapsAPILoader, MouseEvent } from '@agm/core';

declare const google: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  address: string;
  latitude: string;
  longitude: string;

  latitude1: string;
  longitude1: string;
  constructor(private mapsAPILoader: MapsAPILoader, private modalService: NgbModal) {}

  openGeolocation() {
    const modalRef = this.modalService.open(GeolocationComponent, {
      ariaLabelledBy: 'modal-basic-title',
      windowClass: 'modal-xl',
    });

    modalRef.componentInstance.savedLocation = {
      lat: this.latitude,
      lng: this.longitude,
    };

    modalRef.result.then(
      (result: any) => {},
      (reason: any) => {
        if (reason['address'] && reason['lng'] && reason['lat']) {
          this.address = 'Address = ' + reason['address'];
          this.latitude = reason['lng'];
          this.longitude = reason['lat'];
          this.latitude1 = 'Latitude = ' + reason['lat'];
          this.longitude1 = 'Longitude = ' + reason['lng'];
        }
      }
    );
  }
  myDateValue: Date;
  minDate: Date;
  maxDate: Date;

  ngOnInit() {
    this.myDateValue = new Date();
    console.log(this.myDateValue);
    this.minDate = new Date(1900, 1, 1);
    this.maxDate = new Date(2022, 11, 1);
  }
}
