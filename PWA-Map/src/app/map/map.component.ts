import { Component, OnInit } from '@angular/core'

interface Location {
  latitude: number;
  longitude: number;
  mapType: string;
  zoom: number;
  marker: any;
}
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass']
})
export class MapComponent implements OnInit {
  location: Location
  origin;
  destination;
  waypoint;

  constructor () {}

  ngOnInit () {
    this.location = {
      latitude: 25.0227445,
      longitude: 121.5447426,
      mapType: "normal",
      zoom: 17,
      marker: {
        lat: 25.0227445,
        lng: 121.5447426,
        label: "XDD"
      }
    }

    this.origin = {
      lat: 25.0227445,
      lng: 121.5447426
    }

    this.destination = {
      lat: 25.0336741,
      lng: 121.5649847
    }

    this.waypoint = [
      {
        location: {
          lat: 25.0478142,
          lng: 121.5147601
        },
        stopover: true
      },

      {
        location: "新北市永和區水源街27巷10號",
        stopover: true
      }
    ]
  }
}
