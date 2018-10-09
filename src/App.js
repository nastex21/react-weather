import React, { Component } from 'react';
import City from "./City";
import InfoBox from "./InfoBox";
import WindInfo from "./WindInfo"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      metric: false
    };

    this.testing = this.testing.bind(this);
    this.imptoMetric = this.imptoMetric.bind(this);
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

    /* componentDidUpdate(prevProps, prevState) {
      // only update chart if the data has changed
      console.log(prevState.metric);
      console.log(this.state.metric);
      if (prevState.metric !== this.state.metric) {
        console.log(prevState);
      }
    } */

  testing() {
    let info = this.state.data.info;
    return (
      <>
       <City name={info.current_observation.display_location.full} />
       <InfoBox data_obv={info.current_observation} metricState={this.state.metric} />
       <WindInfo data_obv={info.current_observation} metricState={this.state.metric} />
      </>
    )
  }
  
  imptoMetric() {
    this.setState(prevState => ({
      metric: !prevState.metric
    }), () => {
  })
}
  

  render() {
    let info = this.state.data.info;
    return (
      <div className="box">
        {info !== undefined ? this.testing() : null}
        <button onClick={this.imptoMetric}>Metric</button>
      </div>
      
    )
  }

}

export default App;