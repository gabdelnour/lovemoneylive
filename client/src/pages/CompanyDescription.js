import React from 'react'
import axios from 'axios'
import CompanyProfileBlock from '../components/CompanyName'
import IncomeStatement from '../components/IncomeStatement'
import EnterpriseValue from '../components/EnterpriseValue'
import CompanyMainStats from '../components/CompanyMainStats'
import WelcomeToCompanyDescription from '../components/WelcomeToCompanyDescription';
import SearchBar from '../components/SearchBars'
import '../cssFiles/CompanyDescription.css'
import BalanceSheet from '../components/BalanceSheet'

class CompanyDescription extends React.Component {
state = {
    ticker: '',
    companyProfile: {},
    balanceSheet: {},
    incomeStatement: {},
    enterpriseValue: {},
    incomeStatementKeys: [],
    loading: true
}



handleInputChange = event => this.setState({ ticker: event.target.value })

getCompanyProfile = async event => {
    event.preventDefault();
    const { data } = await axios.get(`/api/companyBundle/${this.state.ticker}`)
    const { companyProfile, balanceSheet, incomeStatement, enterpriseValue } = data;
    this.setState({ companyProfile, balanceSheet, incomeStatement, enterpriseValue, loading: false})
}

    render(){
        const { companyProfile, balanceSheet, incomeStatement, enterpriseValue, loading } = this.state
        console.log(this.state)
        const financials = incomeStatement.financials ? incomeStatement.financials[0] : {}
        const financialsBS = balanceSheet.financials ? balanceSheet.financials[0] :{}

        return(
            <>
            <div className="container">
                <div className="innerWrapper">
                    <div className="topWrapper">
                        <div className="navBarWrapper">
                            {
                                <SearchBar
                                    handleInputChange={this.handleInputChange}
                                    getCompanyProfile={this.getCompanyProfile}

                                />
                            }
                        </div>
                        <div ClassName="welcome Message">
                            {
                                loading &&
                                <WelcomeToCompanyDescription/>
                            }
                        </div>
                    </div>
                    <div>
                        <div className="companyMainStats">
                            <hr/>
                            {
                                companyProfile.profile &&
                                    <CompanyMainStats
                                    { ...companyProfile.profile }
                                    eps={ financials.EPS }
                                />
                            }
                        </div>
                        <div className="companyProfileBlock">
                            {
                                companyProfile.profile &&
                                <CompanyProfileBlock { ...companyProfile.profile } />
                            }
                        </div>
                    </div>
                        <div className="tableData">
                            {
                                companyProfile.profile &&
                                <IncomeStatement {...financials} />
                            }
                        </div>
                        <div className="tableData">
                            {
                                companyProfile.profile &&
                                <EnterpriseValue {...enterpriseValue.enterpriseValues[0]}/>
                            }
                        </div>    
                    <div className="tableData">
                        {
                        companyProfile.profile &&
                        <BalanceSheet {...financialsBS} />
                        }
                    </div>  
                </div>
            </div>
        </>
        )
    }

}
export default CompanyDescription


