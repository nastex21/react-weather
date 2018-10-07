import React, { Component } from 'react';
import Condition from "./ConditionImgs"

export default class InfoBox extends Component {
    

    render(){
        let info = this.props.data_obv;
        return(
            <div className="variousInfo">
                <Condition data={this.props.data_obv}/>
                <p id="condition">{info.weather}</p>
                <p id="temp">{info.temp_f}</p>
                <p id="dewpoint">{info.dewpoint_f}</p>
                <p id="humidity">{info.relative_humidity}</p>
                <p id="feelsLike">{info.feelslike_f}</p>
            </div>
        )
    }
}