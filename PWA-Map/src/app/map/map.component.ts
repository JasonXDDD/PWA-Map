import { Component, OnInit, ViewChild } from '@angular/core'

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

  select;
  select_id;

  tour: any[];

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

    // this.origin = {
    //   lat: 25.0227445,
    //   lng: 121.5447426
    // }

    // this.destination = {
    //   lat: 25.0336741,
    //   lng: 121.5649847
    // }

    // this.waypoint = [
    //   {
    //     location: {
    //       lat: 25.0478142,
    //       lng: 121.5147601
    //     },
    //     stopover: true
    //   },

    //   {
    //     location: "新北市永和區水源街27巷10號",
    //     stopover: true
    //   }
    // ]


    this.tour = [
      {
        name: "台北教育大學",
        time: "07:00 - 09:00",
        lat: 25.023387,
        lng: 121.5431559
      },
      {
        name: "台北 101",
        time: "09:30 - 12:00",
        lat: 25.033976,
        lng: 121.5623502
      },
      {
        name: "台北 101",
        time: "12:30 - 14:00",
        lat: 25.0473723,
        lng: 121.5146958
      }
    ]

    this.origin = this.genLocation('endpoint', this.tour[0])
    this.destination = this.genLocation('endpoint', this.tour[this.tour.length-1])
    this.waypoint = this.tour
      .filter((ele, id, arr) => id != 0 && id != arr.length-1)
      .map(ele => this.genLocation('waypoint', ele))

    this.select_id = 0
    this.select = this.tour[this.select_id]
  }

  // MAP
  genLocation(type, point){
    if(type == 'endpoint'){
      return {
        lat: point.lat,
        lng: point.lng
      }
    }

    if(type == 'waypoint'){
      return {
        location: {
          lat: point.lat,
          lng: point.lng
        },
        stopover: true
      }
    }
  }

  changePoint(type){
    if(type === 'next'){
      if(!(this.tour.length-1 == this.select_id)){
        this.select_id ++
      }
    }
    if(type === 'prev'){
      if(!(0 == this.select_id)){
        this.select_id --
      }
    }

    this.select = this.tour[this.select_id]
    this.goToPoint(this.select)
  }

  goToPoint(point){
    this.location.zoom = 16
    this.location.latitude = point.lat
    this.location.longitude = point.lng
  }

}
