import React from 'react'

class CompanyList extends React.Component {
  state = { 
    stockCompanyList : []
  }

  handleFilter = () => {
    fetch(`/api/v3/company/stock/list`)
      .then(response => response.json())
      .then(data => console.log(data))
  }

  render(){
    return(
      <div>
      <h1>Filter the Company List</h1>
      </div>    
    )
  }
  componentDidMount(){
    this.handleFilter()
  }

}



export default CompanyList