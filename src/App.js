import React, { Component } from 'react';
import City from "./City";
import InfoBox from "./InfoBox";
import { guidGenerator } from "./generateuniqkey";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      metric: false,
      text: "Metric"
    };

    this.additionalContent = this.additionalContent.bind(this);
    this.imptoMetric = this.imptoMetric.bind(this);
  }

  //fetch json information before mounting
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

    //check to see if the state updated from previous one
    componentDidUpdate(prevProps, prevState) {
      if (prevState.metric !== this.state.metric) {
        this.state.metric === true ? this.setState({text: "Imperial"}) : this.setState({text: "Metric"})
      }
    } 

    //function that adds the City component and InfoBox component
  additionalContent() {
    let info = this.state.data.info;
    return (
      <div id="inside-contents"> 
       <City name={info.current_observation.display_location.full} />
       <InfoBox data_obv={info.current_observation} metricState={this.state.metric} />
      </div>
    )
  }
  
  //if the conversion button is pressed, it'll updated the state back and forth and "componentDidUpdate" will activate
  imptoMetric() {
    this.setState(prevState => ({
      metric: !prevState.metric
    })
    )
  }

  render() {
    let info = this.state.data.info;
    return (
      <>
        {info !== undefined ? this.additionalContent() : null}
        <div key={guidGenerator()} id="button">        
           <button onClick={this.imptoMetric}>{this.state.text}</button>
        </div>
      </>
      
    )
  }

}

export default App;