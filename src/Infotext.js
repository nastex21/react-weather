import React, { Component } from 'react';
import Condition from "./ConditionImgs";
import WindInfo from "./WindInfo";
import { guidGenerator } from "./generateuniqkey";


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

    //when the component mounts, set the state with this information
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

    //when a component gets updated, check the previous state with the current state
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
        //generates virtual DOM elements
        return [
            <div key={guidGenerator()} id="left-info">
              <div key={guidGenerator()} className="circle1">
                    <Condition key={guidGenerator()} data={this.props.data} />
                    <p key={guidGenerator()} id="condition">{this.state.condition}</p>
                </div>
            </div>,
            <div key={guidGenerator()} id="mid-info">
              <div key={guidGenerator()} className="circle2">
                <p key={guidGenerator()} id="temp">{this.state.temp}<span key={guidGenerator()} id="temp-degree" className='degree'>{String.fromCharCode(176)}</span><span key={guidGenerator()} id="feh-unit">{this.state.unit}</span></p>
                <p key={guidGenerator()} id="feelsLike">Feels Like: {this.state.feelsLike} <span key={guidGenerator()} id="feelsLike-degree" className="degree">{String.fromCharCode(176)}</span><span key={guidGenerator()} id="realFeelUnit">{this.state.unit}</span></p>
                </div>
                <p key={guidGenerator()}><span key={guidGenerator()} id="precip">Precipitation Today: {this.state.precip}</span></p>
            </div>,
           <div key="right-column" id="right-info">           
                <div key="circle3" className="circle3">
                    <WindInfo key="WindInfo" data={this.props.data} metric={this.props.metricState} />
                </div>
            </div>
        ]
    }
}