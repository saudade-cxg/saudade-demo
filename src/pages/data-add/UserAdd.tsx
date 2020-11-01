import Guide from 'react-guide'
import React, { Component } from 'react'

export default class UserAdd extends Component {
    constructor () {
        super()
        this.state = {
          visible: false
        }
      }
      handleStart() {
        this.setState({
          visible: true
        })
      }
      handleCancel() {
        this.setState({
          visible: false
        })
      }
      render() {
        return (
          <div style={{
              height: '500px',
              position: 'relative'
          }}>
            <Guide 
              visible={this.state.visible} 
              onCancel={this.handleCancel.bind(this)} >
                <h1  data-step="1" data-tip=''>Step1</h1>
                <div data-step="3" data-tip='Welcome to use react-guide'>Step3</div>
                <h4 style={{
                    position: 'absolute',
                    right: '100px',
                    top: '30px'
                }} data-step="2" data-tip='react-guide is very easy' >Step2</h4>
                <div><span data-step="4" data-tip='Let start'>Step4</span></div>
          </Guide>
          <button onClick={this.handleStart.bind(this)}>start</button>
        </div>
        );
      }
}
