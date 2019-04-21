import React, { Component } from "react";
import "./style.css";

class Search extends Component {
  state = {
    city: "Sultanpur"
  };

  onChangeHandler = event => {
    this.setState({city: event.target.value})
  };

  render() {
    return (
      <div id="search-box">
        <input type="text" placeholder="Enter Your City" onChange={this.onChangeHandler}/>
        <button onClick={this.props.searchClk.bind(this, this.state.city)}>Search</button>
      </div>
    );
  }
}

export default Search;
