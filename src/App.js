import React, {Component} from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'
import axios from 'axios'

class App extends Component{
  constructor(){
    super();
    this.state = {
      inventory:[],
      currentId:0
    }; };
    componentDidMount=()=> {
      this.update()
    }
    update=()=> {
      axios.get( '/api/inventory' ).then( response => {
        this.setState({ inventory: response.data });
      });
    }
  render(){
  return (
    <div>
    <Header/>
    <div className="screen">
    <Dashboard className="dash" inventory={this.state.inventory} update={this.update}/>
    <div className="dash2"><Form  update={this.update}/></div>
    </div>
    
    </div>
    )
}}

export default App;
