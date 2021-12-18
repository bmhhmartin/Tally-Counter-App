import React, { Component } from "react";
import counterBtn from "../images/count-button.png";
import resetBtn from "../images/reset-button.png";

class Count extends Component {
    constructor(){
      super()
      this.state={
        count: 0
      }
    }
    countProcess=()=>{
      this.setState({
        count: this.state.count + 1
      })
    }
    resetProcess=()=>{
      this.setState({
        count: this.state.count * 0
      })
    }
    render() {
        return ( 
          <div className="tally__body">
          <div className="tally__count">{this.state.count}</div>
          <div className="count__button" onClick={this.countProcess}>
            <img src={counterBtn} alt="count button" />
          </div>
          <div className="count__reset" onClick={this.resetProcess}>
            <img src={resetBtn} alt="reset button"/>
          </div>
      </div>
        )
    }
}

export default Count;