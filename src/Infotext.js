import React, { Component } from 'react';
import Condition from "./ConditionImgs";
import WindInfo from "./WindInfo";


export default class Infotext extends Component {
    constructor(props){
        super(props)
        this.state = {
            condition: "",
            temp: "",
            dewpoint: "",
            humidity: "",
            feelsLike: "",
            precip: "",
            unit: ""
        }
    }

    componentDidMount(){
        let info = this.props.data;
        this.setState({
            condition: info.weather,
            temp: Math.round(info.temp_f),
            dewpoint: info.dewpoint_f,
            humidity: info.relative_humidity,
            feelsLike: Math.round(info.feelslike_f),
            precip: info.precip_today_string,
            unit: String.fromCharCode(176, 70)
        })
    }

    componentDidUpdate(prevProps){  
        if (this.props.metricState !== prevProps.metricState) {
            let info = this.props.data;
            if(this.props.metricState){
                this.setState({
                    temp: Math.round(info.temp_c),
                    dewpoint: Math.round(info.dewpoint_c),
                    feelsLike: Math.round(info.feelslike_c),
                    unit: String.fromCharCode(176, 67)
                });
            } else {
                this.setState({
                    temp: Math.round(info.temp_f),
                    dewpoint: Math.round(info.dewpoint_f),
                    feelsLike: Math.round(info.feelslike_f),
                    unit: String.fromCharCode(176, 70)
                })
            }
          }
    }
    

    render(){
        return [
            <div id="left-info">
                <Condition data={this.props.data} />
                <span id="condition">{this.state.condition}</span>
                <span id="temp">{this.state.temp} <span id="temp-degree" class='degree'>{this.state.unit}</span></span>
                <span id="feelsLike">Feels Like: {this.state.feelsLike} <span id="feelsLike-degree" class="degree">{this.state.unit}</span></span>
            </div>,
           <div id="right-info">
                <WindInfo data={this.props.data} metric={this.props.metricState} />
                <span id="dewpoint">Dewpoint: {this.state.dewpoint} <span id="dewpoint-degree" class='degree'>{this.state.unit}</span></span>
                <span id="humdity">Relative Humdity: {this.state.humidity}</span>
                <span id="precip">Precipitation Today: {this.state.precip}</span>
            </div>
        ]
    }
}