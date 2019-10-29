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
                                companyLogo={companyProfile.profile.image}
                                companyName={companyProfile.profile.companyName}
                                exchange={companyProfile.profile.exchange}
                                companySymbol={companyProfile.profile.symbol}
                                changes={companyProfile.profile.changes}
                                changesPercentage={companyProfile.profile.changesPercentage}
                                mktCap={companyProfile.profile.mktCap}
                                eps={incomeStatement.financials[0].EPS}
                                price={companyProfile.profile.price}
                            />
                        }
                </div>
                <div>
                    {
                        companyProfile.profile && 
                        <CompanyProfileBlock 
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


