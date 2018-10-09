import React, { Component } from 'react';
import Condition from "./ConditionImgs"
import Infotext from "./Infotext"

export default class InfoBox extends Component {
    

    render(){
        console.log(this.props.metricState)
        return(
            <div className="infoBox">
            <div className="info">
                 <Condition data={this.props.data_obv}/>
                 <Infotext data={this.props.data_obv} metricState={this.props.metricState} />
             </div>
            </div>
        )
    }
}