import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  state = {
    weatherData: {},
    temp: {},
    wind: {},
    coord: {},



  };
  componentDidMount() {
    axios
      .get(
        "http://api.openweathermap.org/data/2.5/weather?q=Kiev&units=metric&appid=b0ce1fbd2b74865c3ef64d68aad23248"
      )
      .then(response => {
        this.setState({ weatherData: response.data, temp: response.data.main, wind: response.data.wind, coord: response.data.coord });
        console.log(response.data);
        console.log(this.state.temp);
        console.log(this.state.wind);
      });
  }

  render() {
    return (
      <div>
        {JSON.stringify(this.state.weatherData)}
        <ul>
          <li>Долгота: {this.state.coord.lon}</li>
          <li>Широта: {this.state.coord.lat}</li>
          <li>Температура: {this.state.temp.temp}</li>
          <li>Ветер: {this.state.wind.speed}</li>
        </ul>
      </div>
    );
  }
}

export default App;
