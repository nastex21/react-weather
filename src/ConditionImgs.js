import React, { Component } from 'react';

export default class Condition extends Component {
    constructor(props) {
        super(props);
        this.state = {
            src: "blank.jpg"
        }
        this.conditionCheck = this.conditionCheck.bind(this);
      }

    componentDidMount(){
        this.conditionCheck();
        
    }

    conditionCheck(){
        let data = this.props.data;
        var d = new Date();
        var n = d.getHours();
        var condition = data.weather;

        var rainy_condition = condition.match(/Drizzle|Rain/); 

        var cloudy_condition = condition.match(/Cloudy|Overcast|Clouds/);

        var snowy_condition = condition.match(/Snow|Sleet/);
        
        var foggy_condition = condition.match(/Mist|Fog|Haze|Smoke|Sand/);

        var icy_condition = condition.match(/Ice|Icy/);

        var hail_condition = condition.match(/Hail/);

        var thunderstorm_condition = condition.match(/Thunderstorm|Tunderstorms/);

        var clear_condition = condition.match(/Clear/);

        var background = document.querySelector("body");

        //CLOUDY CONDITIONS
        if (cloudy_condition !== null) {
            if (n >= 6 && n <= 18) {
                background.style.backgroundImage = "url(https://res.cloudinary.com/nasax2000/image/upload/q_auto/v1468646002/Weather/cloudy.jpg)";
                document.getElementById("box").backgroundImage = "url(https://res.cloudinary.com/nasax2000/image/upload/q_auto/v1468646002/Weather/cloudy.jpg)";

                this.setState({src: "http://icons.wxug.com/i/c/i/mostlycloudy.gif" });
         
            } else if (n < 6 || n > 18) {
                background.style.backgroundImage = "url(https://res.cloudinary.com/nasax2000/image/upload/q_auto/v1468646007/Weather/moon-clouds.jpg)";

                this.setState({src: "http://icons.wxug.com/i/c/i/nt_mostlycloudy.gif"});

            }
        }

        //RAINY CONDITIONS
        if (rainy_condition !== null) {
            background.style.backgroundImage ="url(https://res.cloudinary.com/nasax2000/image/upload/q_auto/v1468647513/Weather/water-815271.jpg)";    
            
            this.setState({src: "http://icons.wxug.com/i/c/j/nt_chancerain.gif" });
        }

        //FOGGY CONDITIONS
        if (foggy_condition !== null) {
            background.style.backgroundImage = "url(https://res.cloudinary.com/nasax2000/image/upload/q_auto/v1468646002/Weather/foggy.jpg)";

            this.setState({src: "http://icons.wxug.com/i/c/j/fog.gif"})
        }

        //SNOWY CONDITIONS
        if (snowy_condition !== null) {
            background.style.backgroundImage = "url(https://res.cloudinary.com/nasax2000/image/upload/q_auto/v1468646017/Weather/snow-on-berries-1379880.jpg)";

            this.setState({src: "http://icons.wxug.com/i/c/j/flurries.gif"});
        }

        //ICY CONDITIONS
        if (icy_condition !== null) {
            background.style.backgroundImage ="url(https://res.cloudinary.com/nasax2000/image/upload/q_auto/v1468647757/Weather/icy.jpg)";

            this.setState({src: "http://icons.wxug.com/i/c/j/sleet.gif"});
        }

        //THUNDERSTORMS CONDITION
        if (thunderstorm_condition !== null) {
            background.style.backgroundImage = "url(https://res.cloudinary.com/nasax2000/image/upload/q_auto/v1468646049/Weather/thunder.jpg)";     

            this.setState({src: "http://icons.wxug.com/i/c/i/tstorms.gif"});
        }

        //HAIL CONDITIONS
          if (hail_condition !== null) {
            background.style.backgroundImage = "url(https://res.cloudinary.com/nasax2000/image/upload/q_auto/v1468648660/Weather/hailstones-1338886.jpg)";
                        
            this.setState({src: "http://icons.wxug.com/i/c/j/sleet.gif"});
                    }

        
        //CLEAR CONDITIONS
            if (clear_condition !== null) {
                if (n >= 5 && n <= 7) {
                    background.style.backgroundImage = "url(https://res.cloudinary.com/nasax2000/image/upload/q_auto/v1468646022/Weather/sunrise-182302.jpg)";

                    this.setState({src: "http://icons.wxug.com/i/c/k/clear.gif"});

                } else if (n > 7 && n < 17) {
                    background.style.backgroundImage = "url(https://res.cloudinary.com/nasax2000/image/upload/q_auto/v1468646022/Weather/sun.jpg)"; 

                    this.setState({src: "http://icons.wxug.com/i/c/k/clear.gif"});

                } else if (n >= 17 && n <= 19) {
                    background.style.backgroundImage = "url(https://res.cloudinary.com/nasax2000/image/upload/q_auto/v1468646049/Weather/sunset-288531.jpg)";

                    this.setState({src: "http://icons.wxug.com/i/c/k/clear.gif"});
                } else if (n > 19 || n < 6) {
                    background.style.backgroundImage = "url(https://res.cloudinary.com/nasax2000/image/upload/q_auto/v1468646020/Weather/night.jpg)";

                    this.setState({src: "http://icons.wxug.com/i/c/i/nt_clear.gif"});
                }
            }

        //if condition is an empty string
            if (condition === "") {
                if (n >= 5 && n <= 7) {
                    
                        background.style.backgroundImage = "url(https://res.cloudinary.com/nasax2000/image/upload/q_auto/v1468646022/Weather/sunrise-182302.jpg)";

                    this.setState({src: "http://icons.wxug.com/i/c/j/clear.gif"});

                } else if (n > 7 && n < 17) {
                    
                        background.style.backgroundImage = "url(https://res.cloudinary.com/nasax2000/image/upload/q_auto/v1468646022/Weather/sun.jpg)";

                    this.setState({src: "http://icons.wxug.com/i/c/j/clear.gif"});

                } else if (n >= 17 && n <= 19) {
                    
                        background.style.backgroundImage ="url(https://res.cloudinary.com/nasax2000/image/upload/q_auto/v1468646049/Weather/sunset-288531.jpg)";

                    this.setState({src: "http://icons.wxug.com/i/c/j/clear.gif"});

                } else if (n > 19 || n < 6) {
                    
                        background.style.backgroundImage = "url(https://res.cloudinary.com/nasax2000/image/upload/q_auto/v1468646020/Weather/night.jpg)";

                    this.setState({src: "http://icons.wxug.com/i/c/i/nt_clear.gif"});

                }
            }
        
        }
    

    render(){
        return (
            <img id="icon" src={this.state.src} alt="icon images for weather condition" /> 
        )
    }
}