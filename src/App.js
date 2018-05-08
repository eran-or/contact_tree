import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Tree from './Tree'
import {contacts} from './lib/contacts'

class App extends Component {
  
  state = {
    tree:[],
    contactsByIds:{}
  }
  
  componentWillMount(){
    const contactsByIds = {}
    
    function normalizer(contacts){
       for(let c of contacts){
        if(c.contacts){
          normalizer(c.contacts)
        }
        
        c.show = false
        contactsByIds[c.id]=c
      }
    }

    const contactsCopy = [...contacts]
    normalizer(contactsCopy)
     this.setState({tree:contactsCopy, contactsByIds})
  }
  
  handleToggle = (id)=>{
    this.setState((state=>{
      state.contactsByIds[id].show = !state.contactsByIds[id].show
      return Object.assign({},...state, ...state.contactsByIds, ...state.contactsByIds[id])
    }))
  }

render() {
  return (
    <div className="app">
      <Tree data={this.state.tree} handleToggle={this.handleToggle} />
    </div>
  );
}
}

export default App;
