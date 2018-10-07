import React, { Component } from 'react';

export default class InfoBox extends Component {

    render(){
        console.log(this.props.data_obv);
        let info = this.props.data_obv;
        return(
            <div className="variousInfo">
                <img id="icon" src="blank.jpg" alt="icon images for weather condition" />
                <p id="condition">{info.weather}</p>
                <p id="temp">{info.temp_f}</p>
                <p id="dewpoint">{info.dewpoint_f}</p>
                <p id="humidity">{info.relative_humidity}</p>
                <p id="feelsLike">{info.feelslike_f}</p>
            </div>
        )
    }
}