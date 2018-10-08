import React, { Component } from 'react';

export default class WindInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            src: "blank.jpg",
            direction: "",
            mph: "",
            gust: ""
        }
        this.windIcons = this.windIcons.bind(this);
          }

    componentDidMount(){
        let info = this.props.data_obv;
        console.log(info);
        this.setState({
            direction: info.wind_dir,
            mph: info.wind_mph,
            gust: info.wind_gust_mph

        })
        this.windIcons();
    }

    windIcons(){
        let info = this.props.data_obv;

        var wind_dir = info.wind_dir;

        var northwest = wind_dir.match(/NW|WNW|NNW/);

        var southwest = wind_dir.match(/SW|WSW|SSW/);

        var west = wind_dir.match(/W/);

        var northeast = wind_dir.match(/NE|NNE|ENE/);

        var southeast = wind_dir.match(/SE|SSE|ESE/);

        var east = wind_dir.match(/E/);

        var north = wind_dir.match(/N/);

        var south = wind_dir.match(/S/);

        if (northwest !== null) {
            this.setState({src: "https://res.cloudinary.com/nasax2000/image/upload/c_scale,q_auto,w_50/v1468745818/Arrows/northwestarrow.png"});
        } else if (southwest !== null) {
            this.setState({src:"https://res.cloudinary.com/nasax2000/image/upload/c_scale,q_auto,w_50/v1468745818/Arrows/southwestarrow.png"});
        } else if (northeast !== null) {
            this.setState({src:"https://res.cloudinary.com/nasax2000/image/upload/c_scale,q_auto,w_50/v1468745818/Arrows/northeastarrow.png"});
        } else if (southeast !== null) {
            this.setState({src: "https://res.cloudinary.com/nasax2000/image/upload/c_scale,q_auto,w_50/v1468745818/Arrows/southeastarrow.png"});
        } else if (north !== null) {
            this.setState({src:"https://res.cloudinary.com/nasax2000/image/upload/c_scale,q_auto,w_50/v1468745818/Arrows/northarrow.png" });
        } else if (south !== null) {
             this.setState({src: "https://res.cloudinary.com/nasax2000/image/upload/c_scale,q_auto,w_50/v1468745818/Arrows/southarrow.png" });
        } else if (east !== null) {
             this.setState({src: "https://res.cloudinary.com/nasax2000/image/upload/c_scale,q_auto,w_50/v1468745818/Arrows/eastarrow.png"});
        } else if (west !== null) {
            this.setState({src: "https://res.cloudinary.com/nasax2000/image/upload/c_scale,q_auto,w_50/v1468745818/Arrows/westarrow.png" });
        }
    }

    render(){
        return(
            <div className="windInfoBox">
                 <div className="variousInfo">
                    <img id="arrowIcons" src={this.state.src} alt="cardinal directions for wind" />
                    <p id="wind_direction">{this.state.direction}</p>
                    <p id="wind_mph">Wind: {Math.round(this.state.mph)} MPH</p>
                    <p id="wind_gust">Gust: {Math.round(this.state.gust)} MPH</p>
                </div>
            </div>
        )
    }
}