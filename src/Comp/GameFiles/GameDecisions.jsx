import React, {Component} from "react";


class GameDecisions extends Component{
    constructor(props){
        super(props);
        // console.log('GameDecisions- Construcotr-props',props);
        
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
            <div id="GameDecisions">
                <p>Have you seen this number yet?</p>
                <button id="Decisions-Yes" onClick={this.props.yesClk}>Yes</button>
                <button id="Decisions-No" onClick={this.props.noClk}>No</button>
            </div>
        );
    }


}



export default GameDecisions;


