var x = document.getElementById("demo");
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
      "<br>Longitude: " + position.coords.longitude;
  }
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=calicut&appid=b41ec3be35c7dac8aabbc21ba253137a`)
function searchLocation(){
   search=Locate.value
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=b41ec3be35c7dac8aabbc21ba253137a`).then(data=>data.json()).then(lData=>displayData(lData))
   
   function displayData(dataArray){
     cityName= search
     console.log(cityName);
     temp1=parseInt(dataArray.main.temp-273.15)
     wh=dataArray.weather[0].description
     humid=dataArray.main.humidity
     wind=dataArray.wind.speed
     press=dataArray.main.pressure
     seal=dataArray.main.sea_level
     console.log(seal);
     loc.innerHTML=`Location : ${cityName}`
     temp.innerHTML = `<i class="fa-solid fa-cloud-sun fa-2xl"></i> ${temp1}°C`; 
     cloud.innerHTML = ` ${wh}`;
     humidity.innerHTML = ` ${humid}%`;
     windSpeed.innerHTML=` ${wind} km/h`
     pressure.innerHTML=`${press} Pa`
     sea1.innerHTML=`${seal} m`
   }

 }