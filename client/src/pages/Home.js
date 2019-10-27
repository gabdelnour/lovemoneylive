import React from 'react'


class Home extends React.Component {
  state = {
      companies: [],
  }
  
      handleSearch = event => {
              fetch(`/api/v3/company/profile/${event.target.value}`)
              .then(response => response.json())
              .then(data => console.log(data))
      }
  
      render(){
          return(
              <div className="home">
              <h1>Welcome to Love$Life<br/>
              {new Date().toLocaleTimeString()}.</h1>
              <input 
                  className="wynput"
                  type="Text"
                  name="name"
                  autoComplete="off"
                  placeholder="Ticker Symbol"
                  onChange={this.handleSearch}
              />
              </div>
          )
      }
  }

  export default Home