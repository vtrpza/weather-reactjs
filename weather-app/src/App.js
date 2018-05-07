import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "61989f08ddeb8e6280bf191b9e12f8cb";

class App extends React.Component {

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.name.city.value;
    const country = e.target.elements.name.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data); 
  }

  render() {
    return(
      <div>
        <Titles/>
        <Form getWeather={this.getWeather}/>
        <Weather/>
      </div>
    );
  }
};

export default App;