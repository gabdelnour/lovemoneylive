import React from 'react'
import axios from 'axios'
import Stockchart from '../components/Stockchart'
import './HomeCSS.css'

class Homepage extends React.Component {
  state = {
    companies: [],
    ticker: '',
    companyProfile: {},
    balanceSheet: {},
    incomeStatement: {},
    enterpriseValue: {},
    companyType: "gainers"
  }

handleInputChange = event => this.setState({ ticker:event.target.value })

handleCompanyTypeChange = event => this.getTheTopTen(event.target.value)

getTheTopTen = type => {
  axios.get(`/api/${type}`)
  .then(response => this.setState({ companyType: type, companies: response.data}))
}

getHome = async event => {
    event.preventDefault();
    const { data } = await axios.get(`/api/companyBundle/${this.state.ticker}`)
    const { companyProfile, balanceSheet, incomeStatement, enterpriseValue } = data;
    this.setState({ companyProfile, balanceSheet, incomeStatement, enterpriseValue})
}

componentDidMount() {
  this.getTheTopTen(this.state.companyType)

}
render(){
  const { companyProfile } = this.state
  console.log(this.state)
  return(
    <div id="Wrapper">
      <div id="div5">
      <img id="Logo" src="/logo.png" alt="The L$VELIFE team Logo"/>
        <div>
          <link rel="stylesheet" href="https://use.typekit.net/ayl3jve.css"></link>
          <div id="div1">
            <h1>Love. Money. Life. What else could you want?..</h1>
          </div>
          <div id="div4">
            <Stockchart ticker={companyProfile.symbol || 'AAPL'}/>
          </div>
          <div id="div2">
            <h1>Enter your symbol below to get started.</h1>
              <form onSubmit={this.getHome}>
                <input type ="Text" placeholder="Symbol of Stock" onChange={this.handleInputChange}/>
                <input type ="submit" value="Get Company Bundle"/>
              </form>
          </div>
          <div>
             {
               companyProfile.profile && <img src={companyProfile.profile.image} alt={`${companyProfile.profile.name} logo img`}/>
             }
          </div>
            <div id="div3">
              <select value={this.state.companyType} onChange={this.handleCompanyTypeChange}>
                <option value="gainers">Top 10 Gainers Today</option>
                <option value="losers">Top 10 Losers Today</option>
              </select>
                  <table id="htabl">
                    <thead>
                      <tr>
                        <th>  Company Name  </th>
                        <th>  Price Per Share  </th>
                        <th>  Change Percentage  </th>
                      </tr>
                    </thead>
                    <tbody>
                    { 
                      this.state.companies.map(company => (
                        <tr key={company.ticker}>
                          <td>
                            {company.companyName}
                          </td>
                          <td>
                            {company.price}
                          </td>
                          <td>
                            {company.changesPercentage}
                          </td>
                        </tr>
                      ))
                    }
                    </tbody>
                  </table>
            </div>
        </div>
      </div>
    </div>
          )
        }

}
export default Homepage
