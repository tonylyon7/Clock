import React, { Component } from 'react'
import './Clock.css'

class Clock extends Component {

  constructor(props){
    super(props)
    this.state ={
      time : new Date ()
    }
  }

  componentDidMount(){
    this.timeId = setInterval (() => {
      this.setState({
        time : new Date()
      })
    }, 1000)
  }

  componentWillUnmount(){
    clearInterval(this.timeId)
  }
  render(){
    return (
      <>
        <div className='Clock'>
          <div className='hour-hand'
            style={{transform : `rotateZ(${this.state.time.getHours() *30}deg)`}}>
          </div>
          <div className='min-hand'
            style={{transform : `rotateZ(${this.state.time.getMinutes() *6}deg)`}}>
          </div>
          <div className='sec-hand'
            style={{transform : `rotateZ(${this.state.time.getSeconds() *6}deg)`}}>
          </div>

          <span className='twelve'>12</span>
          <span className='one'>1</span>
          <span className='two'>2</span>
          <span className='three'>3</span>
          <span className='four'>4</span>
          <span className='five'>5</span>
          <span className='six'>6</span>
          <span className='seven'>7</span>
          <span className='eight'>8</span>
          <span className='nine'>9</span>
          <span className='ten'>10</span>
          <span className='eleven'>11</span>
        </div>
        <div>
          
        </div>
      </>
    )
  }
}

export default Clock