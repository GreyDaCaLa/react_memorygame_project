import React, {Component} from "react";

class GameScore extends Component{
    constructor(props){
        super(props);
        // console.log('GameScore- Construcotr-props',props);
        
        //this. state
        //this. --- function binds

    }



    //the functions code like even handlers or others

    // life cycle methods
    //--componentDidMount
    //--componentDidUpdate
    //--componentWillUnmount

    render(){
        return (
            <div id ="Scoreboard">
                <span>Score: {this.props.currentScore}</span>
                <span>Best Score: {this.props.bestScore}</span>
                {/* <span>Best time function for visibility after first win</span> */}

            </div>

        );
    }
}



export default GameScore;




/* end */





