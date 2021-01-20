import React, {Component} from 'react';
import Book from './Book';

export default class Books extends Component{
    render(){
        let books = this.props.books.filter(b => (b.title.toLowerCase().includes(this.props.search.toLowerCase()) || b.author.toLowerCase().includes(this.props.search.toLowerCase()))).map((b, i) => <Book add={this.props.add} key={i} book={b} />);
        return(
            <div id="library">
                {books}
            </div>
        );
    }
}