import React, {Component} from "react";
import "./GameStyle.css";
import GameDecisions from "./GameDecisions";
import GameVisuals from "./GameVisuals";


class Game extends Component{
    constructor(props){
        super(props);
        // console.log('Game- Construcotr-props',props);
        //state
        const items =[], itemscount=10;
        for(let i =0;i<itemscount; i++){
            //array of [visual thing, has been shown before bool
            items.push([i,false]);
        }
        this.state={
            items,
            itemscount,
            currentItem: Math.floor(Math.random()*itemscount),
          }
        console.log("Game -  the original state",this.state)


        // binds
        this.handleChoiceClk__Yes = this.handleChoiceClk__Yes.bind(this);
        this.handleChoiceClk__No = this.handleChoiceClk__No.bind(this);
        this.resetSeen= this.resetSeen.bind(this);


        

    }

    resetSeen(){
        console.log("Game-ResetSeen reseting the array")
        const mid =[], itemscount=10;
        for(let i =0;i<itemscount; i++){
            //array of [visual thing, has been shown before bool
            mid.push([i,false]);
        }
        this.setState({
            items: mid
        })

    }



    //the functions code like event handlers or others
    handleChoiceClk__Yes(){
        console.log("YOU CLICKED YES -- currentscore:", this.state.currentScore);
  
        if(this.state.items[this.state.currentItem][1] == true ){
            this.setState({
                currentItem: Math.floor(Math.random()*this.state.itemscount),
            }, ()=>{console.log("this new state after YES",this.state)})
            
            this.props.upScore();
            if(this.props.currentScore>=9){
                this.resetSeen();  
            }
    
        }else {
            this.resetSeen();        
            this.props.gameOver();
        }
    }

    handleChoiceClk__No(){
        console.log("YOU CLICKED NO -- currentscore:", this.state.currentScore);
        let mid;
  
        if(this.state.items[this.state.currentItem][1] == false ){
            mid = this.state.items;
            mid[this.state.currentItem][1] = true;
            this.setState({
                items: mid,
                currentItem: Math.floor(Math.random()*this.state.itemscount),
            },
            ()=>{console.log("this new state after NO",this.state)
                })

            this.props.upScore();
            if(this.props.currentScore>=9){
                this.resetSeen();  
            }
        
        }else {
            this.resetSeen();
            this.props.gameOver();
        }
    }




    // gameWon(){

    // }

    // life cycle methods
    //--componentDidMount
    //--componentDidUpdate
    //--componentWillUnmount

    render(){
        return(
            <div id="GameItemContainer">
                <GameVisuals currentItem={this.state.items[this.state.currentItem]}/>
                <GameDecisions yesClk = {this.handleChoiceClk__Yes} noClk={this.handleChoiceClk__No}/>
            </div>
        );
    }


}



export default Game;


