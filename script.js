const apiKey = "ceaf5d9f50e3753a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?appid=ceaf5d9f50e375329c81ae8156e9d50a&units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");

async function checkweather(city){
  const response = await fetch(apiUrl + city + '&appid=${apiKey}');
  var data = await response.json();
  
  console.log(data);
  
  document.querySelector(".city").innerHTML=data.name;
  document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+ "°C";
  document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
  document.querySelector(".wind").innerHTML=data.wind.speed +"km/h";
}
searchBtn.addEventListener("click", ()=>{
  checkweather(searchBox.value);
})
