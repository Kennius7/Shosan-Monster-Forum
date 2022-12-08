import React, { Component } from 'react';
import './App.css';
import CardList from './components/CardListComponent';
import SearchBox from './components/search-box/SearchBox';



export class App2 extends Component {
    constructor(){
        super();

        this.state = {
            monsters: [],
            searchField: ""
        }
        //Another way to bind a method to our component below, after using a standard function
        //this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => this.setState({monsters: users}))
    }

    //a simpler way to bind a method to our component below, after using an arrow function, without the .bind function
    handleChange = (e) => {this.setState({searchField: e.target.value})}

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster=>monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
        <div className="App">
            <h1>Monster's Forum</h1>
            <SearchBox 
            placeholder="Search Monsters" 
            handleChange={this.handleChange} 
            />

            <CardList 
            monster={filteredMonsters} 
            />
        </div>
    )
  }
}

export default App2

//https://jsonplaceholder.typicode.com/users
//https://randomuser.me/api/data

