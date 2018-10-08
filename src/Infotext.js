import React, { Component } from 'react';

export default class Infotext extends Component {
    constructor(props){
        super(props)
        this.state = {
            condition: "",
            temp: "",
            dewpoint: "",
            humidity: "",
            feelsLike: ""
        }
    }

    componentDidMount(){
        let info = this.props.data;
        console.log(info.weather);
        this.setState({
            condition: info.weather,
            temp: Math.round(info.temp_f),
            dewpoint: info.dewpoint_f,
            humidity: info.relative_humidity,
            feelsLike: Math.round(info.feelslike_f)
        })
    }
    

    render(){
  
        return(
            <>
            <p id="condition">Conditions: {this.state.condition}</p>
            <p id="temp">Temperature: {this.state.temp}</p>
            <p id="dewpoint">Dewpoint: {this.state.dewpoint}</p>
            <p id="humdity">Relative Humdity: {this.state.humidity}</p>
            <p id="feelsLike">Feels Like: {this.state.feelsLike}</p>
          </>
        )
    }
}