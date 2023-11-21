const apiKey = "5fcbf5499ad73568aedc6fcc7c76f70f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const icon =document.getElementById("weather_icon");
const weather=async()=>{
  const response = await fetch(apiUrl+`&appid=${apiKey}`+`&q=${cityName.value}`);
  const data = await response.json();

  document.getElementById("temp").textContent= Math.round(data.main.temp)+"°C";
  document.getElementById("city").textContent=data.name ;
  document.getElementById("humidity").textContent=data.main.humidity+"%" ;
  document.getElementById("wind").textContent=data.wind.speed+ "km/h";
  console.log(data);
  if(data.weather[0].main==="Clouds"){
    icon.src ="images/clouds.png";
    }
    else if(data.weather[0].main==="Clear"){
      icon.src ="images/clear.png";
    }
    else if(data.weather[0].main==="Rain"){
      icon.src ="images/rain.png";
    }
    else if(data.weather[0].main==="Drizzle"){
      icon.src ="images/drizzle.png";
    }
    else if(data.weather[0].main==="Mist"){
      icon.src ="images/mist.png";
    }
}

const cityName= document.getElementById("search");
document.querySelector("#search_bar button").addEventListener("click",(e)=>{
weather();
cityName.value="";
document.getElementById("detail").style.opacity="1";
document.getElementById("icon").style.opacity="1";
});
