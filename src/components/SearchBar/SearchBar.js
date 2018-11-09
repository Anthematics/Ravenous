import React from 'react'
import './SearchBar.css'

const sortByOptions= {
    'Best Match': 'best_match',
    'Highest Rated' : 'rating',
    'Most Reviewed' : 'review_count'
}

function getSortbyClass (sortByOption) {
    if (this.sortBy.state === sortByOption) {
        return 'active'
    } else {
        return ''
    }

}

/*

1. getSortByClass would not return anything if I did not
refer to this.state since it is in the this.state object

2. This Function Returns the current CSS class for a sorting option.
*/

function handleSortByChange(sortByOption) {
    this.setState(this.sortBy = sortByOption)
}
/*
This second method (handleSortByChange) updates the state by calling .setState to set the state to the sortByOption
this seems to mean that the css class should === the state.
*/
class Searchbar extends React.Component {
    constructor(props) {
        super(props)
            this.state = {
                term: '',
                location: '',
                sortBy: 'best_match'
            }

        }
    renderSortByOptions() {
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return <li key={sortByOptionValue}> {sortByOption} </li>
        })
    }


    render() {
        return(
        <div className="SearchBar">
    <div className="SearchBar-sort-options">
        <ul>
        {this.renderSortByOptions()}
        </ul>
    </div>
    <div className="SearchBar-fields">
        <input placeholder="Search Businesses" />
        <input placeholder="Where?" />
    </div>
    <div className="SearchBar-submit">
        <a>Let's Go</a>
    </div>
    </div>
        );}
}

export default Searchbar;

// Line 14 might not be this.sortByOptionValue (maybe remove this)