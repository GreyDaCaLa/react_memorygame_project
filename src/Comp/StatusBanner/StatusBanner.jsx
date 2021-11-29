import React, {Component} from "react";
import "./BannerStyle.css"

class StatusBanner extends Component{
    constructor(props){
        super(props);
        // console.log('GameScoreStatusBanner- Construcotr-props',props);
        
        //this. state
        //this. --- function binds
        this.dispStatusMessage = this.dispStatusMessage.bind(this);

    }



    //the functions code like event handlers or others
    dispStatusMessage(){

        switch(this.props.gameCount%4){
            case 0:
                return(
                    <div id ="GameStatusBannerCont">
                        <span>Good Luck!!!</span>
                        <span>Remember to keep your eyes open!!</span>
                    </div>
                );
                break;
            case 1:
                return(
                    <div id ="GameStatusBannerCont">
                        <span>Thanks for playing again</span>
                        <span>Maybe it helps to not blink??</span>
                    </div>
                );
                break;
            case 2:
                return(
                    <div id ="GameStatusBannerCont">
                        <span>Thanks for playing again..again.</span>
                        <span>there is a (insert number here)% Chance that you'll win by just clicking NO.</span>
                    </div>
                );
                break;
            case 3:
                return(
                    <div id ="GameStatusBannerCont">
                        <span>Wow didn't think you'd make it this far.</span>
                        <span>Going to just repeat myslef now.</span>
                    </div>
                );
                break;

        }


    }

    // disUnhelpfulStatusmessage(){

    // }






    // life cycle methods
    //--componentDidMount
    //--componentDidUpdate
    //--componentWillUnmount




    render(){
        return (
            <>
            {this.dispStatusMessage()}
            </>

        );
    }
}



export default StatusBanner;




/* end */





