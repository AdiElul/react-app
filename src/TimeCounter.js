import React from "react";

export default class TimeCounter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
           count: 0
        }
        this.updateCounter();
    }

    updateCounter() {
        setInterval(() => {
            this.setState((prevState) => {
                return {
                    count: prevState.count + 1
                }
            })
        }, 1000) 
    }

    render(){
        return(
            <h1>{this.state.count}</h1>  
        );
    } 
}