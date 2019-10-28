import React from 'react'
import axios from 'axios';

class CompanyList extends React.Component {
  state = { 
    companies : [],
    totalResults: 0,
    minPrice : '',
    maxPrice : '999999999999',
    stockCompanyList: {},
    ticker: ''
  }


  handleInputChange = event => this.setState({ ticker : event.target.value })
  handleMinPrice = event => this.setState({ minPrice : event.target.value })
  handleMaxPrice = event => this.setState({ maxPrice : event.target.value })

  getCompanyProfile = async ()  => {
    const {data} = await axios.get(`/api/v3/company/stock/list`)
    this.setState({stockCompanyList: data.symbolsList})
  }

  makeItems = () => {
    const companyArray = this.state.stockCompanyList
    companyArray.forEach(element => {
      console.log(element.nam)
    });
  }

// app.get('/api/v3/company/stock/list', async (_, response) => {
//   const { data } = await axios.get(`https://financialmodelingprep.com/api/v3/company/stock/list/`)
//   response.send(data) 
// })


  render(){
    console.log(this.state.stockCompanyList)
    return(
      <div className="company-list">
        <h1>Filter Stock Company List</h1>
      </div>

    )
  }
  componentDidMount(){
    this.getCompanyProfile()
  }
}



export default CompanyList