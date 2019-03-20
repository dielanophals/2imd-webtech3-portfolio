// let weather = {
//   'location': {
//     'x': 52.788,
//     'y': 10.000
//   },
//   'degrees': 12,
//   'icons': ['sun.svg', 'clouds.svg']
// }
// console.log(weather.degrees)

class Wheater {
    constructor(API_KEY){
      this.API_KEY = API_KEY;
        console.log("🍿");
        this.initialize();
    }

    initialize() {
        this.getMyLocation();
        this.getYoga();
    }

    getMyLocation(){
        console.log("Getting location 🚀");
        navigator.geolocation.getCurrentPosition(position => {
            console.log("found you");
            console.log(position);
            let lat = position.coords.latitude;
            let lng = position.coords.longitude;
            this.getWeather(lat, lng);

        }, err => {
            console.log(err);
        });
    }

    getWeather(lat, lng){
      // AJAX call / XHR
      let url = `http://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${this.API_KEY}/${lat},${lng}`;
      fetch(url)
      .then(response => {
        return response.json();
      })
      .then(json => {
        console.log(json.currently.summary);
        document.getElementById('weather').innerHTML += `<h1>${json.currently.summary}</h1>`;
      });
    }

    getYoga(){
      let url = `https://raw.githubusercontent.com/rebeccaestes/yoga_api/master/yoga_api.json`;
      fetch(url)
      .then(response => {
        return response.json();
      })
      .then(json => {
        document.getElementById('pic').src = json[13].img_url;
        // document.getElementById('weather').innerHTML += `<h1>${json.sanskrit_name}</h1>`;
      });
    }

}

let app = new Wheater('055622cc09065af76c5a531722f24c38');
