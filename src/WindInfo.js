import React, { Component } from 'react';

export default class WindInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            direction: "",
            speed: "",
            gust: "",
            unit: ""
        }
    }          

    componentDidMount(){
        let info = this.props.data;
        this.setState({
            direction: info.wind_dir,
            speed: info.wind_mph,
            gust: info.wind_gust_mph,
            unit: "MPH"
        })
    }
    

    componentDidUpdate(prevProps){ 
        if (this.props.metric !== prevProps.metric) {
            let info = this.props.data;
            if(this.props.metric){
                this.setState({
                    speed: Math.round(info.wind_kph),
                    gust: Math.round(info.wind_gust_kph),
                    unit: "KPH"
                });
            } else {
                this.setState({
                    speed: info.wind_mph,
                    gust: info.wind_gust_mph,
                    unit: "MPH"
                })
            }
          }
    }

    render(){
    
        return(
                <>
                    <p id="wind"><span id="wind_label">Wind</span></p>
                    <p id="wind_measurements"><span id="wind_speed"> {Math.round(this.state.speed)} <span id="wind_unit">{this.state.unit}</span></span></p>
                    <p id="direction"><span id="wind_direction">{this.state.direction}</span></p>
                    <p id="gust"><span id="gust_speed">Gust: {Math.round(this.state.gust)} <span id="gust-unit">{this.state.unit}</span></span></p>
                </>
        )
    }
}