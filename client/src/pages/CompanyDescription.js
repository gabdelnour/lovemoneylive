import React from 'react'


class CompanyDescription extends React.Component {
state = {
    companies: [],
}

    handleSearch = event => {
            fetch(`/api/v3/company/profile/${event.target.value}`)
            .then(response => response.json())
            .then(data => console.log(data))
    }

    render(){
        return(
            <div>
            <h1>Search for a company</h1>
            <input 
                type="Text"
                placeholder="Company Name"
                onChange={this.handleSearch}
            />
            </div>

        )

    }

}
export default CompanyDescription


