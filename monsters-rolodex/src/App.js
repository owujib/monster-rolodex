import React, {Component} from 'react';

import './App.css';
import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.component'


class App extends Component{
  constructor(){
    super();

    this.state = {  
      monsters: [],
      searchField: ''
    }; 
  }
  
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(user => this.setState({monsters: user}))
  }

  handleChange = (e) =>{
    this.setState({searchField: e.target.value})
    
  }
  

  render(){
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return(
      // {/* using the props.children and create a componemte tag
      //  <CardList>
      //   {
      //     this.state.monsters.map(monster => <h1 key={monster.id}>{monster.name}</h1>)
      //   }
      // </CardList> */}
      <div className="App">
        <h1>MONSTERS ROLODEX</h1>
        <SearchBox
         placeholder='search monsters'
         handleChange={this.handleChange}/>
        <CardList monsters={filteredMonsters}/>
      </div>
    )
  }
}

export default App;
