import React, {Component} from "react";
import PropTypes from "prop-types";

class Decrementer extends Component{
    constructor(props){
        super(props);
        this.state={num: props.value}
    }
  
    decrement=(state)=>{
      if(state.num===0){
        return alert("Cannot go lower than zero...");
      }
        this.setState({num : state.num -1});
    };
    render(){
        return (
        <div> 
        <h4>Num= {this.state.num}{"  "}
        <button onClick={()=>this.decrement(this.state)}>Minus One</button>
        </h4>
        </div>
               );
        }
    }
    Decrementer.propTypes={
            value: PropTypes.number.isRequired,
    };
export default Decrementer;