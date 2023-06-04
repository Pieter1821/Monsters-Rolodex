
import { Component } from 'react'

import './App.css'


class App extends Component {

  constructor(){
    super()

    this.state = {
      name: 'Pieter'
    }
  }

  
  render(){

    return (
      <div>
         <h1>Hi my name is {this.state.name}</h1>
         <button>
              Change my name
         </button>
  </div>
  )
} 
}

  
  
  
  
  
  
  

export default App
