import React, { Component } from 'react';
import Condition from "./ConditionImgs";
import WindInfo from "./WindInfo";


export default class Infotext extends Component {
    constructor(props){
        super(props)
        this.state = {
            condition: "",
            temp: "",
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
            feelsLike: Math.round(info.feelslike_f),
            precip: info.precip_today_string,
            unit: "F"
        })
    }

    componentDidUpdate(prevProps){  
        if (this.props.metricState !== prevProps.metricState) {
            let info = this.props.data;
            if(this.props.metricState){
                this.setState({
                    temp: Math.round(info.temp_c),
                    feelsLike: Math.round(info.feelslike_c),
                    unit: "C"
                });
            } else {
                this.setState({
                    temp: Math.round(info.temp_f),
                    feelsLike: Math.round(info.feelslike_f),
                    unit: "F"
                })
            }
          }
    }
    

    render(){
        return [
            <div id="left-info">
              <div className="circle1">
                    <Condition data={this.props.data} />
                    <p id="condition">{this.state.condition}</p>
                </div>
            </div>,
            <div id="mid-info">
              <div className="circle2">
                <p id="temp">{this.state.temp}<span id="temp-degree" className='degree'>{String.fromCharCode(176)}</span><span id="feh-unit">{this.state.unit}</span></p>
                <p id="feelsLike">Feels Like: {this.state.feelsLike} <span id="feelsLike-degree" className="degree">{String.fromCharCode(176)}</span><span id="realFeelUnit">{this.state.unit}</span></p>
                </div>
                <p><span id="precip">Precipitation Today: {this.state.precip}</span></p>
            </div>,
           <div id="right-info">           
                <div className="circle3">
                    <WindInfo data={this.props.data} metric={this.props.metricState} />
                </div>
            </div>
        ]
    }
}