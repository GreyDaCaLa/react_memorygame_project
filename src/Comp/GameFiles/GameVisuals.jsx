import React, {Component} from "react";


class GameVisuals extends Component{
    constructor(props){
        super(props);
        // console.log('GameVisuals- Construcotr-props',props);
        
        //this. state
        //this. --- function binds

    }

    getRandomColor(){
        const rgb = Math.floor(Math.random()*255);
        return rgb;
      }



    //the functions code like even handlers or others

    // life cycle methods
    //--componentDidMount
    //--componentDidUpdate
    //--componentWillUnmount

    render(){
        // console.log("GameVisual-rendor",this.props.currentItem)
        return(
            <div id="GameVisuals" style={{backgroundColor: `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`}}>
                <p>{this.props.currentItem[0]}</p>
            </div>
        );
    }


}



export default GameVisuals;


