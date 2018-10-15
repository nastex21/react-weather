import React, { Component } from 'react';
import Infotext from "./Infotext";

export default class InfoBox extends Component {
    

    render(){
        //component that runs InfoText where the text portion of the app is generated
        return <Infotext data={this.props.data_obv} metricState={this.props.metricState} />
    }
}