import React, {Component} from 'react';

export default class Search extends Component{
    constructor(){
        super();

        this.state = {
            searchString: ''
        }

        this.clearSearch = this.clearSearch.bind(this);
    }

    updateSearch(val){
        this.setState({
            searchString: val
        });
    }

    clearSearch(e){
        e.stopPropagation();
        this.setState({
            searchString: ''
        }, () => this.props.search(''));

    }

    render(){
        return(
            <div id="searchBar">
                <div id="search">
                    <input type="text" onChange={e => this.updateSearch(e.target.value)} id="search" value={this.state.searchString}/> 
                    <button onClick={e => this.props.search(this.state.searchString)}>Search</button>
                    {this.state.searchString !== '' && <button onClick={e => this.clearSearch(e)}>Clear Search</button>}
                </div>
            </div>
        );
    }
}