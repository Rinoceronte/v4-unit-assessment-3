import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import data from './data.js';
import Books from './Books';
import Search from './Search';
import Shelf from './Shelf';

class App extends Component {
  constructor(){
    super();

    this.state = {
      books: data,
      bookshelf: [],
      search: ''
    }

    this.search = this.search.bind(this);
    this.addBook = this.addBook.bind(this);
    this.clearShelf = this.clearShelf.bind(this);
  }


  search(val){
    // console.log(val + " is here");
    this.setState({
      search: val
    })
  }

  addBook(book){
    if(this.state.bookshelf.includes(book))
    {}
    else{
      this.setState({
        bookshelf: [...this.state.bookshelf, book]
      });
    }
    // console.log(this.state.bookshelf);
  }

  clearShelf(){
    this.setState({
      bookshelf: []
    });
  }

  render(){

    return (
    <div className="App">
      <header><h1>Bookist</h1></header>
      <Search search={this.search}/>
      <div id="content">
        <Books search={this.state.search} add={this.addBook} books={this.state.books}/>
        <Shelf books={this.state.bookshelf} clear={this.clearShelf}/>
      </div>
    </div>
  );
    }
}

export default App;
