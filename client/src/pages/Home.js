import React from 'react'
import axios from 'axios'

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
        <div>
          <div className="home">
            <h1>Welcome to L$VELIFE</h1>
            <img src="/logo.png" alt="The L$VELIFE team Logo"/>
          </div>
          <div>
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
          <div>
             <select value={this.state.companyType} onChange={this.handleCompanyTypeChange}>
              <option value="gainers">Top 10 Gainers Today</option>
              <option value="losers">Top 10 Losers Today</option>
             </select>
                 <table>
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
          )
        }

}
export default Homepage