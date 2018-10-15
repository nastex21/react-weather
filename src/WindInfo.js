import React, { Component } from 'react';
import { guidGenerator } from "./generateuniqkey";

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
                    <p id="wind" key={guidGenerator()}><span id="wind_label" key={guidGenerator()}>Wind</span></p>
                    <p id="wind_measurements" key={guidGenerator()}><span id="wind_speed" key={guidGenerator()}> {Math.round(this.state.speed)}</span> <span id="wind_unit" key={guidGenerator()}>{this.state.unit}</span></p>
                    <p id="direction" key={guidGenerator()}><span id="wind_direction" key={guidGenerator()}>{this.state.direction}</span></p>
                    <p id="gust" key={guidGenerator()}><span id="gust_speed" key={guidGenerator()}>Gust: {Math.round(this.state.gust)}</span> <span id="gust-unit" key={guidGenerator()}>{this.state.unit}</span></p>
                </>
        )
    }
}