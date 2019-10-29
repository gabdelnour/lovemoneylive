import React from 'react'
import axios from 'axios';

class CompanyList extends React.Component {
  state = { 
    totalResults: 0,
    minPrice : '',
    maxPrice : '',
    stockCompanyList: [],
    companyName: '',
    filtered: []
  }

  getCompanyProfile = async (event)  => {
    event.preventDefault()
    const {data} = await axios.get(`/api/stock/list`)
    this.setState({stockCompanyList: data.symbolsList})
  }




// app.get('/api/v3/company/stock/list', async (_, response) => {
//   const { data } = await axios.get(`https://financialmodelingprep.com/api/v3/company/stock/list/`)
//   response.send(data) 
// })

  render(){
    const { stockCompanyList } = this.state
    console.log(stockCompanyList)
    return(
        <>
          <h1>Here are some companies</h1>
          <form onSubmit={this.getCompanyProfile}>
            <input
              type="text"
              placeholder="Enter Company Name"
              autoComplete="off"
              onChange={ e => this.setState({ compan: e.target.value }) }
              id="title"
            />
            <input
              type="number"
              placeholder="Min Price"
              min="0"
              value={this.state.minPrice}
              onChange={ e => this.setState({ minPrice: e.target.value })}
            />
            <input
              type="number"
              placeholder="Max Price"
              min="0"
              max={this.state.maxPrice}
              value={this.state.maxPrice}
              onChange={ e => this.setState({ maxPrice: e.target.value })}
            />
            <input 
              type="submit"
              value="Filter by Price"
            />
          </form>
            <div className="companyList">
              {
                stockCompanyList
                .filter(company =>{
                  if(this.state.minPrice){
                    return Number(company.price) >= Number(this.state.minPrice)
                  }else{
                    return true
                  }
                })
                .filter(company =>{
                  if(this.state.maxPrice){
                    return Number(company.price) >= Number(this.state.maxPrice)
                  }else{
                    return true
                  }
                })
                .map(company => (
                    <div className="company" key={company.symbol}>
                      <div className="companySymbol" id={company.symbol}>
                        <h3>({company.symbol})</h3>
                      </div>
                      <div className="stockPrice"id={company.price}>
                        <h3>${company.price}</h3>
                      </div>
                      <div className="companyName" id={company.name}>
                        <h3>{company.name} </h3></div>
                    </div>
                ))             
              }
            </div>
        </>
    )
  }
}



export default CompanyList