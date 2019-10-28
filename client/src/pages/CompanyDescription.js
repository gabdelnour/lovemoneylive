import React from 'react'
import axios from 'axios';
import CompanyName from '../components/CompanyName';


class CompanyDescription extends React.Component {
state = {
    companies: [],
    ticker: '',
    companyProfile: {},
    balanceSheet: {},
    incomeStatement: {}, 
    enterpriseValue: {},
}

handleInputChange = event => this.setState({ ticker: event.target.value })

getCompanyProfile = async event => {
    event.preventDefault();
    const { data } = await axios.get(`/companyBundle/${this.state.ticker}`)
    const { companyProfile, balanceSheet, incomeStatement, enterpriseValue } = data;
    this.setState({ companyProfile, balanceSheet, incomeStatement, enterpriseValue })
}

    render(){
        const { companyProfile } = this.state
        console.log(this.state);
        return(
            <div>
                <h1>Search for a company</h1>
                <form onSubmit={this.getCompanyProfile}>
                    <input 
                        type="Text"
                        placeholder="Company Name"
                        onChange={this.handleInputChange}
                    />
                    <input 
                        type="submit"
                        value="Get Company Bundle"
                    />
                </form>
                <div>
                    <h1>Company Name</h1>
                    {companyProfile.profile && <CompanyName companyName={companyProfile.profile.companyName} />}
                </div>
            </div>

        )
    }

}
export default CompanyDescription


