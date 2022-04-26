import React from "react";
import { FormClass } from "./Component/Demo/FormClass";
import DataChild1 from "./Components/DataChild1";
import DisplayBall from "./Components/DisplayBall";
import TimeDisplay from "./TimeDisplay";


export class App2 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:''
        }
    
    }

     handleClick=(uname)=>{
        this.setState({
            name:uname
        })
       
    }


    render(){
        return(
            // <FormClass/>
        //    <TimeDisplay/>
        <div>
        <DisplayBall username={this.state.name}/>
        <DataChild1 handleClick={this.handleClick}/>
        
        </div>
        )
    }
}