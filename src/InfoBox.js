import React, { Component } from 'react';
import Infotext from "./Infotext"

export default class InfoBox extends Component {
    

    render(){
        return(
            <>
                 <Infotext data={this.props.data_obv} metricState={this.props.metricState} />
            </>
        )
    }
}