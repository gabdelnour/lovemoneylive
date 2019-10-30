import React from 'react'
import '../cssFiles/Searchbar.css'
import '../cssFiles/CompanyDescription.css'

const SearchBar = props => (
<div id="cover">
    <form className="TickerForm"onSubmit={props.getCompanyProfile}>
        <div className="tb">
            <div className="td">
                <input 
                    className="tickerSearch"
                    type="text"
                    placeholder="Enter Ticker" 
                    onChange={props.handleInputChange} 
                    required/>
            </div>
            <div className="td" id="s-cover">
                <button className="tickerButton" type="submit">
                    <div id="s-circle"></div>
                    <span></span>
                </button>
            </div>
        </div>
    </form>
</div>
)

export default SearchBar
