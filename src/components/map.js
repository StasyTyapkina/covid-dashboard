import mapboxgl from 'mapbox-gl';

class Map {
  constructor() {
    this.containerForMap = document.createElement('div');
    this.containerForMap.id = 'map';
    this.wrapper = document.querySelector('.map');
    this.wrapper.append(this.containerForMap);
    this.color = '';

    // const proxyurl = "https://cors-anywhere.herokuapp.com/"; /* TODO сделать собственный cors */
    const url = 'https://corona.lmao.ninja/v2/countries';

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const cases = data;

        // console.log(data);

        cases.forEach((country) => {
          const { active, countryInfo } = country;
          const { lat, long: lng } = countryInfo;

          new mapboxgl.Marker({
            color: this.getMarkerColorFromCount(active),
          })
            .setLngLat([lng, lat])
            .addTo(this.map);
        });
      })
      .catch(() => {
        throw new Error(`Can’t access ${this.url} response.`);
      });

    const mapboxToken = 'pk.eyJ1IjoidHlhcGtpbmEiLCJhIjoiY2tpc21rZHo1MHlzbTJ0bnl3dm1hcHB5dyJ9.Y-85A8m0cHc6u4PEow2Xgg';
    mapboxgl.accessToken = mapboxToken;
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/dark-v10',
      zoom: 1.5,
      center: [0, 20],
    });
  } // end constructor

  getMarkerColorFromCount(count) {
    if (count >= 100) {
      this.color = 'red';
    }
    if (count >= 10) {
      this.color = 'blue';
    }
    this.color = 'gray';
    return this.color;
  }
}

// const bigMap = new Map();

export default Map;
