import React, { Component } from "react";
import "./App.css";
import Header from "./Comp/Head/Header";
import Game from "./Comp/GameFiles/Game";
import StatusBanner from "./Comp/StatusBanner/StatusBanner";

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      currentScore: 0,
      bestScore:0,
      hasWonOnce: false,
      gameCount: 0,
      bestTime: 0,
      currentTime: 0,
    }

    this.upScore = this.upScore.bind(this);
    this.gameOver = this.gameOver.bind(this);
    this.wonGame = this.wonGame.bind(this);

  }


  wonGame(){
    let mid =false;
    if(this.state.hasWonOnce == false){
      mid = true;
    }else{
    }
    this.setState({
      hasWonOnce: mid,
      bestScore: 10,
      currentScore: 0,
      gameCount: this.state.gameCount+1,
    })
  }

  gameOver(){
    let mid;
    if(this.state.currentScore>this.state.bestScore){
      mid = this.state.currentScore
    }else{
      mid = this.state.bestScore
    }
    this.setState({
      bestScore: mid,
      currentScore: 0,
      gameCount: this.state.gameCount+1,
    })

  }

  upScore(){
    console.log("App - Updateing score")
    if(this.state.currentScore>=9){
      this.wonGame();
    }else{
      this.setState({
        currentScore: this.state.currentScore+1,
      })
    }

  }



  render() {
    return (
      <main>
        <Header 
          currentScore={this.state.currentScore} 
          bestScore={this.state.bestScore} 
          hasWonOnce={this.state.hasWonOnce} 
          bestTime={this.state.bestTime}
        />

        <StatusBanner hasWonOnce={this.state.hasWonOnce} gameCount={this.state.gameCount} />

        <Game
          upScore = {this.upScore}
          wonGame = {this.wonGame}
          gameOver = {this.gameOver}
          currentScore = {this.state.currentScore}
        />
      </main>
    );
  }
}

export default App;
