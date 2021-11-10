import { MapsAPILoader } from '@agm/core';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.scss'],
})
export class GeolocationComponent implements OnInit {
  @Input() savedLocation: any;

  lat = 51.678418;
  lng = 7.809007;

  latitude: any;
  longitude: any;
  geoCoder: any;
  zoom: any;
  address: any;

  information: string = 'Drag the marker to change Location.';

  constructor(public activeModal: NgbActiveModal, private mapsAPILoader: MapsAPILoader) {}

  markerDragEnd($event: any) {
    this.latitude = $event.latLng.lat();
    this.longitude = $event.latLng.lng();
    this.information = 'Latitude = ' + this.latitude + ' , Longitude = ' + this.longitude;
    this.getAddress(this.latitude, this.longitude);
  }

  getAddress(latitude: any, longitude: any) {
    this.geoCoder.geocode({ location: { lat: latitude, lng: longitude } }, (results: any, status: any) => {
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.address = results[0].formatted_address;
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }
    });
  }

  ngOnInit() {
    this.mapsAPILoader.load().then(() => {
      if (this.savedLocation['lat'] && this.savedLocation['lng']) {
        this.lng = this.savedLocation['lat'] + 0;
        this.lat = this.savedLocation['lng'] + 0;
      } else {
        this.setCurrentLocation();
      }
      this.geoCoder = new google.maps.Geocoder();
    });
  }

  setCurrentLocation() {
    if (navigator) {
      navigator.geolocation.getCurrentPosition((pos) => {
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;

        this.latitude = this.lat;
        this.longitude = this.lng;
        ///this.information = 'Latitude = ' + this.latitude + ' , Longitude = ' + this.longitude;
        this.getAddress(this.latitude, this.longitude);
      });
    }
  }

  saveLocation() {
    let dataToSend = {
      address: this.address,
      lat: this.latitude,
      lng: this.longitude,
    };
    this.activeModal.dismiss(dataToSend);
  }
}
