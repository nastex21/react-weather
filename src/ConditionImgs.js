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

        var cloudy_condition = condition.match(/Cloudy|Clouds/);

        var overcast_condition = condition.match(/Overcast/);

        var snowy_condition = condition.match(/Snow|Sleet/);
        
        var foggy_condition = condition.match(/Mist|Fog|Haze|Smoke|Sand/);

        var icy_condition = condition.match(/Ice|Icy/);

        var hail_condition = condition.match(/Hail/);

        var thunderstorm_condition = condition.match(/Thunderstorm|Tunderstorms/);

        var clear_condition = condition.match(/Clear/);

        var background = document.querySelector("body");
        var copyBody = document.querySelector("#copy-body");

        //Check for conditions: Overcast
        console.log(overcast_condition);
        console.log(clear_condition);
        if(overcast_condition !== null){
                if (n >= 6 && n <= 18) {
                    background.style.backgroundImage = "url(https://res.cloudinary.com/nasax2000/image/upload/q_auto/v1539483751/cloudscape-384672_1920_jngvmo.jpg)";
                    copyBody.style.backgroundImage = "url(https://res.cloudinary.com/nasax2000/image/upload/q_auto/v1539483751/cloudscape-384672_1920_jngvmo.jpg)";
    
                    this.setState({src: "https://res.cloudinary.com/nasax2000/image/upload/v1539487196/Icons/cloudy.png"});
                } else if (n < 6 || n > 18) {
                    background.style.backgroundImage = "url(https://res.cloudinary.com/nasax2000/image/upload/q_auto/v1539483751/moon-3059861_1920_gmz0fh.jpg)";
                    copyBody.style.backgroundImage = "url(https://res.cloudinary.com/nasax2000/image/upload/q_auto/v1539483751/moon-3059861_1920_gmz0fh.jpg)";
    
                    this.setState({src: "https://res.cloudinary.com/nasax2000/image/upload/v1539487196/Icons/cloudy.png"});
                }
            }
        

        //cloudy conditions
        if (cloudy_condition !== null) {
            if (n >= 6 && n <= 18) {
                background.style.backgroundImage = "url(https://res.cloudinary.com/nasax2000/image/upload/q_auto/v1539483751/cloudscape-384672_1920_jngvmo.jpg)";
                copyBody.style.backgroundImage = "url(https://res.cloudinary.com/nasax2000/image/upload/q_auto/v1539483751/cloudscape-384672_1920_jngvmo.jpg)";

                this.setState({src: "https://res.cloudinary.com/nasax2000/image/upload/v1539487196/Icons/cloudysun.png" });
         
            } else if (n < 6 || n > 18) {
                background.style.backgroundImage = "url(https://res.cloudinary.com/nasax2000/image/upload/q_auto/v1539483751/moon-3059861_1920_gmz0fh.jpg)";
                copyBody.style.backgroundImage = "url(https://res.cloudinary.com/nasax2000/image/upload/q_auto/v1539483751/moon-3059861_1920_gmz0fh.jpg)";


                this.setState({src: "https://res.cloudinary.com/nasax2000/image/upload/v1539487196/Icons/cloudymoon.png"});

            }
        }

        //RAINY CONDITIONS
        if (rainy_condition !== null) {
            background.style.backgroundImage ="url(https://res.cloudinary.com/nasax2000/image/upload/q_auto/v1468647513/Weather/water-815271.jpg)"; 
            copyBody.style.backgroundImage = "url(https://res.cloudinary.com/nasax2000/image/upload/q_auto/v1468647513/Weather/water-815271.jpg)";
                
            
            this.setState({src: "https://res.cloudinary.com/nasax2000/image/upload/v1539487196/Icons/rainymoderate.png" });
        }

        //FOGGY CONDITIONS
        if (foggy_condition !== null) {
            background.style.backgroundImage = "url(https://res.cloudinary.com/nasax2000/image/upload/q_auto/v1539483751/fog-1209447_1920_gsj7ei.jpg)";
            copyBody.style.backgroundImage = "url(https://res.cloudinary.com/nasax2000/image/upload/q_auto/v1539483751/fog-1209447_1920_gsj7ei.jpg)";

            this.setState({src: "https://res.cloudinary.com/nasax2000/image/upload/v1539487196/Icons/cloudy.png"})
        }

        //SNOWY CONDITIONS
        if (snowy_condition !== null) {
            background.style.backgroundImage = "url(https://res.cloudinary.com/nasax2000/image/upload/q_auto/v1468646017/Weather/snow-on-berries-1379880.jpg)"; 
            copyBody.style.backgroundImage = "url(https://res.cloudinary.com/nasax2000/image/upload/q_auto/v1468646017/Weather/snow-on-berries-1379880.jpg)"; 

            this.setState({src: "https://res.cloudinary.com/nasax2000/image/upload/v1539487198/Icons/snow.png"});
        }

        //ICY CONDITIONS
        if (icy_condition !== null) {
            background.style.backgroundImage ="url(https://res.cloudinary.com/nasax2000/image/upload/q_auto/v1468647757/Weather/icy.jpg)"; 
            copyBody.style.backgroundImage = "url(https://res.cloudinary.com/nasax2000/image/upload/q_auto/v1468647757/Weather/icy.jpg)"; 

            this.setState({src: "https://res.cloudinary.com/nasax2000/image/upload/v1539487196/Icons/hail.png"});
        }

        //THUNDERSTORMS CONDITION
        if (thunderstorm_condition !== null) {
            background.style.backgroundImage = "url(https://res.cloudinary.com/nasax2000/image/upload/q_auto/v1468646049/Weather/thunder.jpg)"; 
            copyBody.style.backgroundImage = "url(https://res.cloudinary.com/nasax2000/image/upload/q_auto/v1468646049/Weather/thunder.jpg)";

            this.setState({src: "https://res.cloudinary.com/nasax2000/image/upload/v1539487199/Icons/thunderclouds.png"});
        }

        //HAIL CONDITIONS
          if (hail_condition !== null) {
            background.style.backgroundImage = "url(https://res.cloudinary.com/nasax2000/image/upload/q_auto/v1539483753/hailstone-1614239_1920_iqd17w.jpg)";
            copyBody.style.backgroundImage = "url(https://res.cloudinary.com/nasax2000/image/upload/q_auto/v1539483753/hailstone-1614239_1920_iqd17w.jpg)";
                        
            this.setState({src: "https://res.cloudinary.com/nasax2000/image/upload/v1539487196/Icons/hail.png"});
                    }

        
        //CLEAR CONDITIONS
            if (clear_condition !== null) {
                if (n >= 5 && n <= 7) {
                    background.style.backgroundImage = "url(https://res.cloudinary.com/nasax2000/image/upload/q_auto/v1539483754/sunrise_lyhs5e.jpg)"; 
                    copyBody.style.backgroundImage = "url(https://res.cloudinary.com/nasax2000/image/upload/q_auto/v1539483754/sunrise_lyhs5e.jpg)"; 

                    this.setState({src: "https://res.cloudinary.com/nasax2000/image/upload/v1539487198/Icons/sunny.png"});

                } else if (n > 7 && n < 17) {
                    background.style.backgroundImage = "url(https://res.cloudinary.com/nasax2000/image/upload/q_auto/v1468646022/Weather/sun.jpg)"; 
                    copyBody.style.backgroundImage = "url(https://res.cloudinary.com/nasax2000/image/upload/q_auto/v1468646022/Weather/sun.jpg)"; 

                    this.setState({src: "https://res.cloudinary.com/nasax2000/image/upload/v1539487198/Icons/sunny.png"});

                } else if (n >= 17 && n <= 19) {
                    background.style.backgroundImage = "url(https://res.cloudinary.com/nasax2000/image/upload/q_auto/v1539483752/sunset-472981_1920_cfqh34.jpg)"; 
                    copyBody.style.backgroundImage = "url(https://res.cloudinary.com/nasax2000/image/upload/q_auto/v1539483752/sunset-472981_1920_cfqh34.jpg)"; 

                    this.setState({src: "https://res.cloudinary.com/nasax2000/image/upload/v1539487199/Icons/sunset.png"});
                } else if (n > 19 || n < 6) {
                    background.style.backgroundImage = "url(https://res.cloudinary.com/nasax2000/image/upload/q_auto/v1468646020/Weather/night.jpg)"; 
                    copyBody.style.backgroundImage = "url(https://res.cloudinary.com/nasax2000/image/upload/q_auto/v1468646020/Weather/night.jpg)";

                    this.setState({src: "https://res.cloudinary.com/nasax2000/image/upload/v1539487196/Icons/clearmoon.png"});
                }
            }

        //if condition is an empty string
            if (condition === "") {
                if (n >= 5 && n <= 7) {
                    
                        background.style.backgroundImage = "url(https://res.cloudinary.com/nasax2000/image/upload/q_auto/v1468646022/Weather/sunrise-182302.jpg)"; 
                        copyBody.style.backgroundImage = "url(https://res.cloudinary.com/nasax2000/image/upload/q_auto/v1468646022/Weather/sunrise-182302.jpg)"; 

                        this.setState({src: "https://res.cloudinary.com/nasax2000/image/upload/v1539487198/Icons/sunny.png"});


                } else if (n > 7 && n < 17) {
                    
                        background.style.backgroundImage = "url(https://res.cloudinary.com/nasax2000/image/upload/q_auto/v1468646022/Weather/sun.jpg)"; 
                        copyBody.style.backgroundImage = "url(https://res.cloudinary.com/nasax2000/image/upload/q_auto/v1468646022/Weather/sun.jpg)"; 

                        this.setState({src: "https://res.cloudinary.com/nasax2000/image/upload/v1539487198/Icons/sunny.png"});

                } else if (n >= 17 && n <= 19) {
                    
                        background.style.backgroundImage ="url(https://res.cloudinary.com/nasax2000/image/upload/q_auto/v1468646049/Weather/sunset-288531.jpg)"; 
                        copyBody.style.backgroundImage = "url(https://res.cloudinary.com/nasax2000/image/upload/q_auto/v1468646049/Weather/sunset-288531.jpg)"; 

                        this.setState({src: "https://res.cloudinary.com/nasax2000/image/upload/v1539487199/Icons/sunset.png"});

                } else if (n > 19 || n < 6) {
                    
                        background.style.backgroundImage = "url(https://res.cloudinary.com/nasax2000/image/upload/q_auto/v1468646020/Weather/night.jpg)"; 
                        copyBody.style.backgroundImage = "url(https://res.cloudinary.com/nasax2000/image/upload/q_auto/v1468646020/Weather/night.jpg)"; 

                        this.setState({src: "https://res.cloudinary.com/nasax2000/image/upload/v1539487196/Icons/clearmoon.png"});

                }
            }
        
        }
    

    render(){
        return (
            <>
                <img id="icon" src={this.state.src} alt="icon images for weather condition" /> 
            </>
            )
    }
}