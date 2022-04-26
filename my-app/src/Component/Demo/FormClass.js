import { Component } from "react";

export class FormClass extends Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            email:'',
            count:0
        }
        this.handleSubmit=this.handleSubmit.bind(this)

    }
    handleSubmit(e){
        e.preventDefault()
        alert(`${this.state.name} ${this.state.email}`)
        console.log(e)
        
    }
    fildOnChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
    render(){
        return(
            <div>
                <h1>Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Uname</label>
                    <input type='text' name='name' value={this.state.name} onChange={this.fildOnChange.bind(this)}></input>
                    <br/>
                     <label>Email</label>
                    <input type='text' name='email' value={this.state.email} onChange={this.fildOnChange.bind(this)}></input>
                    <br/>
                    <button value='Submit'>Submit</button>
                </form>
                
                <button onClick={()=>this.setState({count:this.state.count+1})}>Increment</button>
                <h1>{this.state.count}</h1>
                <button onClick={()=>this.setState({count:this.state.count-1})}>Decrement</button>
                <button onClick={()=>this.setState({count:0})}>Reset</button>
            </div>
        )
    }
}