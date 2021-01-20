import React, { Component} from 'react';

export default class Shelf extends Component{
    render(){
        let list = this.props.books.map((b, i) => <li key={i}>{b}</li>);
        return(
            <div id="bookshelf">
                <h2>Your Shelf</h2>
                <button onClick={e => this.props.clear()}>Clear</button>
                <ul>
                    {list.length > 0 ? list : <p>Click on images to add to bookshelf</p>}
                </ul>
            </div>
        );
    }
}