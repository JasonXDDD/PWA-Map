import { Component, OnInit, ViewChild } from '@angular/core';
import { MapStyle } from '@app/core/data/map_style';

interface Location {
  latitude: number;
  longitude: number;
  mapType: string;
  zoom: number;
  marker: any;
}

const MapHeight = 130
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass']
})
export class MapComponent implements OnInit {
  location: Location;
  origin;
  destination;
  waypoint;

  select;
  selectId;

  tour: any[];
  mapHeight = `calc(100vh - ${MapHeight}px)`;

  darkStyle;

  constructor(private mapStyle: MapStyle) {}

  ngOnInit() {
    this.darkStyle = this.mapStyle.DarkMode;
    this.location = {
      latitude: 25.0227445,
      longitude: 121.5447426,
      mapType: 'normal',
      zoom: 17,
      marker: {
        lat: 25.0227445,
        lng: 121.5447426,
        label: 'XDD'
      }
    };

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
        name: '台北教育大學',
        time: '07:00 - 09:00',
        description: '國立臺北教育大學是一所專門培育小學師資的教育大學，位於臺北市大安區。前身為「省立臺北師專」，於2005年改為現名，校風保守，留有師範院校的傳統特色。現與國立臺中教育大學為臺灣僅存的兩所國民小學師資培育專門學校之一。',
        image: 'https://img.ltn.com.tw/Upload/news/600/2016/10/22/phpWi7Tnx.jpeg',
        lat: 25.023387,
        lng: 121.5431559
      },
      {
        name: '台北 101',
        time: '09:30 - 12:00',
        // tslint:disable-next-line: max-line-length
        description: '台北101是位於臺灣臺北市信義區的摩天大樓，樓高508公尺，地上樓層共有101層、另有地下5層，總樓地板面積37萬1千平方公尺，由李祖原聯合建築師事務所設計，KTRT團隊承造，於1999年9月動工，2004年12月31日完工開幕。最初名稱為臺北國際金融中心，2003年改為現名。',
        image: 'https://cdn.getyourguide.com/img/tour_img-1878872-146.jpg',
        lat: 25.033976,
        lng: 121.5623502
      },
      {
        name: '台北車站',
        time: '12:30 - 14:00',
        // tslint:disable-next-line: max-line-length
        description: '臺北車站位於臺灣臺北市中正區，為臺鐵、台灣高鐵、臺北捷運的地下化鐵路車站，同時是與桃園機場捷運共站的車站；周邊則有臺北轉運站、國光客運臺北車站等公共汽車站點。不但是臺北都會區與北臺灣首要的公共運輸樞紐，也是全臺灣運量最大的鐵路車站，每日進出人次約52萬以上，長期穩坐台鐵各車站總運量首位，總使用人次則居於全球第25名。',
        image: 'https://photo.travelking.com.tw/scenery/36C8FB62-5AFB-4249-B911-EE7AEA50B6BB_e.jpg',
        lat: 25.0473723,
        lng: 121.5146958
      }
    ];

    this.origin = this.genLocation('endpoint', this.tour[0]);
    this.destination = this.genLocation('endpoint', this.tour[this.tour.length - 1]);
    this.waypoint = this.tour
      .filter((ele, id, arr) => id !== 0 && id !== arr.length - 1)
      .map(ele => this.genLocation('waypoint', ele));

    this.selectId = 0;
    this.select = this.tour[this.selectId];
  }

  // MAP
  genLocation(type, point) {
    if (type === 'endpoint') {
      return {
        lat: point.lat,
        lng: point.lng
      };
    }

    if (type === 'waypoint') {
      return {
        location: {
          lat: point.lat,
          lng: point.lng
        },
        stopover: true
      };
    }
  }

  changePoint(type) {
    if (type === 'next') {
      if (!(this.tour.length - 1 === this.selectId)) {
        this.selectId ++;
      }
    }
    if (type === 'prev') {
      if (!(0 === this.selectId)) {
        this.selectId --;
      }
    }

    if (type === 'open') {
      this.location.zoom = 16;
      $('#map').animate({ height: $('body').height() / 2 - MapHeight }, 300);
    }

    if (type === 'close') {
      this.location.zoom = 13;
      $('#map').animate({ height: $('body').height() - MapHeight }, 300);
    }

    this.select = this.tour[this.selectId];
    this.goToPoint(this.select);
  }

  goToPoint(point) {
    this.location.latitude = point.lat;
    this.location.longitude = point.lng;
  }

}
