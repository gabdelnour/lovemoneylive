import React from 'react'
import axios from 'axios';
import CompanyProfileBlock from '../components/CompanyName';
import IncomeStatement from '../components/IncomeStatement'


class CompanyDescription extends React.Component {
state = {
    ticker: '',
    companyProfile: {},
    balanceSheet: {},
    incomeStatement: {}, 
    enterpriseValue: {},
}

handleInputChange = event => this.setState({ ticker: event.target.value })

getCompanyProfile = async event => {
    event.preventDefault();
    const { data } = await axios.get(`/api/companyBundle/${this.state.ticker}`)
    const { companyProfile, balanceSheet, incomeStatement, enterpriseValue } = data;
    this.setState({ companyProfile, balanceSheet, incomeStatement, enterpriseValue })
    console.log(this.state.incomeStatement.financials[0].EPS);
}

    render(){
        const { companyProfile, incomeStatement } = this.state

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

                    {companyProfile.profile && 
                        <CompanyProfileBlock 
                            companyName={companyProfile.profile.companyName} 
                            companyCEO={companyProfile.profile.ceo}
                            industry={companyProfile.profile.industry}
                            sector={companyProfile.profile.sector}
                            description={companyProfile.profile.description}
                        />
                    }
                </div>
                <div>
                    {
                        companyProfile.profile &&
                        <IncomeStatement
                            eps={incomeStatement.financials[0].EPS}
                            epsDiluted={incomeStatement.financials[0]["EPS Diluted"]}
                            netIncome={incomeStatement.financials[0]["Net Income"]}
                            EBITDA={incomeStatement.financials[0].EBITDA}
                            grossProfit={incomeStatement.financials[0]["Gross Profit"]}
                            profitMargin={incomeStatement.financials[0]["Profit Margin"]}
                            revenue={incomeStatement.financials[0].Revenue}
                            revenueGrowth={incomeStatement.financials[0]["Revenue Growth"]}

                        />
                    }
                </div>
            </div>

        )
    }

}
export default CompanyDescription


