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
  }

handleInputChange = event => this.setState({ ticker:event.target.value })

getHome = async event => {
    event.preventDefault();
    const { data } = await axios.get(`/api/companyBundle/${this.state.ticker}`)
    const { companyProfile, balanceSheet, incomeStatement, enterpriseValue } = data;
    this.setState({ companyProfile, balanceSheet, incomeStatement, enterpriseValue})
}

render(){
  const { companyProfile } = this.state
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
        </div>
          )
        }

}
export default Homepage