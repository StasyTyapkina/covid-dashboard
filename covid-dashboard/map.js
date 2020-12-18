// import 'https://api.mapbox.com/mapbox-gl-js/v2.0.0/mapbox-gl.js'

class Map {
  constructor() {
    this.containerForMap = document.createElement('div');
    this.containerForMap.id = 'map';
    document.body.append(this.containerForMap);

    // const proxyurl = "https://cors-anywhere.herokuapp.com/"; /* TODO сделать собственный cors */
    const url = 'https://corona.lmao.ninja/v2/countries';

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const cases = data;

        console.log(data);

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
      .catch(() => console.log(`Can’t access ${url} response.`));

    const mapbox_token = 'pk.eyJ1IjoidHlhcGtpbmEiLCJhIjoiY2tpc21rZHo1MHlzbTJ0bnl3dm1hcHB5dyJ9.Y-85A8m0cHc6u4PEow2Xgg';

    mapboxgl.accessToken = mapbox_token;
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/dark-v10',
      zoom: 1.5,
      center: [0, 20],
    });
  } // end constructor

  getMarkerColorFromCount(count) {
    if (count >= 100) {
      return 'red';
    }
    if (count >= 10) {
      return 'blue';
    }
    return 'gray';
  }
}

const bigMap = new Map();

//export default Map;
