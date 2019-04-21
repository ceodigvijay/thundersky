import React, { Component } from "react";
import "./App.css";
import Search from "./Components/Search";
import TodayWeather from "./Components/TodayWeather";
import Forecast from "./Components/Forecast";
import CurrentCity from "./Components/CurrentCity";
import Preloader from "./Components/Preloader/Preloader";
import axios from "axios";

const headers = { "Access-Control-Allow-Origin": "*" };
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

class App extends Component {
  state = {
    city: "Lucknow",
    today: null,
    forecast: null,
    isLoading: false,
    error: false,
    errorMessage: ""
  };
  componentDidMount() {
    console.log("ComponentWillMount Ran");
    let city = this.state.city;
    this.setState({ isLoading: true });
    axios
      .get("https://thundersky.herokuapp.com/getData/" + city, headers)
      .then(response => {
        console.log("response");
        console.log(response);
        this.setState({
          today: response.data.current_observation,
          forecast: response.data.forecasts,
          isLoading: false
        });
        console.log("State");
        console.log(this.state);
        // throw Error("Some thing Occured");
      })
      .catch(error => {
        this.setState({ error: true, errorMessage: error.message });
      });
  }

  searchHandler = city => {
    this.setState({ city: city, isLoading: true });
    axios
      .get("https://thundersky.herokuapp.com/getData/" + city, headers)
      .then(response => {
        console.log("response");
        console.log(response);
        this.setState({
          today: response.data.current_observation,
          forecast: response.data.forecasts,
          isLoading: false
        });
        console.log("State");
        console.log(this.state);
        // throw Error("Some thing Occured");
      })
      .catch(error => {
        this.setState({ error: true, errorMessage: error.message });
      });
    console.log(city);
  };

  render() {
    if (this.state.error) {
      return (
        <div>
          <h1>Some Error occured... </h1>
          <div>Message ===>>>> {this.state.errorMessage}</div>
        </div>
      );
    } else if (
      this.state.today &&
      this.state.forecast &&
      !this.state.isLoading
    ) {
      return (
        <div className="App">
          <Search city={this.state.city} searchClk={this.searchHandler} />
          <CurrentCity city={this.state.city} />
          <TodayWeather today={this.state.today} />
          <Forecast forecast={this.state.forecast} />
        </div>
      );
    } else {
      return <Preloader />;
    }
  }
}

export default App;
