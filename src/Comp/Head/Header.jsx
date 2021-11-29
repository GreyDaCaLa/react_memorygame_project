import React, {Component} from "react";
import GameScore from "./GameScore";
import "./HeadStyle.css"; 

class Header extends Component{
    constructor(props){
        super(props);
        // console.log('Header- Construcotr-props',props);
        
        //this. state
        //this. --- function binds

    }



    //the functions code like even handlers or others

    // life cycle methods
    //--componentDidMount
    //--componentDidUpdate
    //--componentWillUnmount

    render(){
        return(
            <header> 
                <h1>React Memory Game</h1>
                <p>
                    Objective: Answer the questions to test your memory.
                    <br />
                    Highest score is 10!
                </p>
                <GameScore
                    currentScore={this.props.currentScore} 
                    bestScore={this.props.bestScore} 
                    hasWonOnce={this.props.hasWonOnce} 
                    bestTime={this.props.bestTime}
                />
            </header>
        );
    }


}



export default Header;


