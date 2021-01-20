import React, {Component} from 'react';

export default class Book extends Component{
    render(){
        return (
            <section className="book">
                <img src={this.props.book.img} onClick={e => this.props.add(this.props.book.title)}/>
                <h3>{this.props.book.title}</h3>
                <h3>By: {this.props.book.author}</h3>
            </section>
        );
    }
}