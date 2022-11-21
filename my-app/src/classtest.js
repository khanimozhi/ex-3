import React, { Component } from 'react'
import"./style.css"
class Name extends Component {
    
    state = {
        count: 0
      }
      handleClick () {
        console.log(this.state.count)
        this.setState({ count: this.state.count + 1})
      }
      componentDidMount() {
        console.log(this.state.count,'mount')
        this.setState({counf: this.state.count + 1})
      }

    render() { 
        return ( 
            <><p>value : {this.state.count}</p>

            <ul>
                <li>khani</li>
                <li>sakthi</li>
            </ul>
            <button  style={{border:"5px solid red"}}onClick={() => this.handleClick()}>+</button>
            <button  style={{border:"5px solid blue"}}onClick={() => {this.setState({count: this.state.count - 1})}}>-</button>
            <button  style={{border:"5px solid pink"}}onClick={() => {this.setState({count: this.state.count * 2})}}>*</button>
            </>
         );
    }
}
 
export default Name ;