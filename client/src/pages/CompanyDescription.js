import React from 'react'
import axios from 'axios';
import CompanyProfileBlock from '../components/CompanyName';
import IncomeStatement from '../components/IncomeStatement'
import EnterpriseValue from '../components/EnterpriseValue'
import CompanyMainStats from '../components/CompanyMainStats'


class CompanyDescription extends React.Component {
state = {
    ticker: '',
    companyProfile: {},
    balanceSheet: {},
    incomeStatement: {},
    enterpriseValue: {},
    incomeStatementKeys: []
}



handleInputChange = event => this.setState({ ticker: event.target.value })

getCompanyProfile = async event => {
    event.preventDefault();
    const { data } = await axios.get(`/api/companyBundle/${this.state.ticker}`)
    const { companyProfile, balanceSheet, incomeStatement, enterpriseValue } = data;
    this.setState({ companyProfile, balanceSheet, incomeStatement, enterpriseValue})
}

    render(){
        const { companyProfile, balanceSheet, incomeStatement, enterpriseValue } = this.state
        console.log(this.state)
        const financials = incomeStatement.financials ? incomeStatement.financials[0] : {}
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
                        {
                            companyProfile.profile &&
                            <CompanyMainStats
                                { ...companyProfile.profile }
                                eps={ financials.EPS }
                            />
                        }
                </div>
                <div>
                    {
                        companyProfile.profile &&
                        <CompanyProfileBlock { ...companyProfile.profile } />
                    }
                </div>
                <div>
                    {
                        companyProfile.profile &&
                        <IncomeStatement {...financials} />
                    }
                </div>
                <div>
                    {
                        companyProfile.profile &&
                        <EnterpriseValue   
                            date={enterpriseValue.enterpriseValues[0].date}
                            stockPrice={enterpriseValue.enterpriseValues[0]["Stock Price"]}
                            numberOfShares={enterpriseValue.enterpriseValues[0]["Number of Shares"]}
                            marketCapitalization={enterpriseValue.enterpriseValues[0]["Market Capitalization"]}
                            cashCashEquivalents={enterpriseValue.enterpriseValues[0]["- Cash & Cash Equivalents"]}
                            totalDebt={enterpriseValue.enterpriseValues[0]["+ Total Debt"]}
                            enterpriseValue={enterpriseValue.enterpriseValues[0]["Enterprise Value"]}
                        />
                    }
                </div>
                <div>

                </div>
            </div>

        )
    }

}
export default CompanyDescription


