import React, { Component } from 'react';
import City from "./City";
import InfoBox from "./InfoBox";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };

    this.testing = this.testing.bind(this);
  }

  componentDidMount() {
    let url_weather = "https://api.wunderground.com/api/04f975d7c4f19dd6/geolookup/conditions/q/autoip.json";
    fetch(url_weather)
    .then( (response) => {
      return response.json() })
      .then ((info) => {
        this.setState(prevState => ({
          data: {
              ...prevState.data,
              info
          }
      }))
      })
    }

  testing() {
    let info = this.state.data.info;
    return (
      <div>
       <City name={info.current_observation.display_location.full} />
       <InfoBox data_obv={info.current_observation} />
      </div>
    )
  }
  

  render() {
    let info = this.state.data.info;
    return (
      <div>
        {info !== undefined ? this.testing() : null}
      </div>
      
    )
  }

}

export default App;