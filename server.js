if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require("express")
const path = require("path")
const app = express()
const axios = require('axios')

// JUST FOR DEMO PURPOSES, PUT YOUR ACTUAL API CODE HERE
// app.get('/api/v3/company/profile/:ticker', (request, response) => {
//   const {ticker} = request.params
//   axios.get(`https://financialmodelingprep.com/api/v3/company/profile/${ticker}`)
//     .then(financialResponse => response.json(financialResponse.data))
// })

// app.get('/api/v3/financials/balance-sheet-statement/:ticker', (request, response) => {
//   const {ticker} = request.params
//   axios.get(`https://financialmodelingprep.com/api/v3/financials/balance-sheet-statement/${ticker}`)
//     .then(balanceSheetResponse => response.json(balanceSheetResponse.data))
// })

// app.get('/api/v3/financials/income-statement/:ticker', (request, response) => {
//   const {ticker} = request.params
//   axios.get(`https://financialmodelingprep.com/api/v3/financials/income-statement/${ticker}`)
//     .then(balanceSheetResponse => response.json(balanceSheetResponse.data))
// })

// app.get('/api/v3/enterprise-value/:ticker', (request, response) => {
//   const {ticker} = request.params
//   axios.get(`https://financialmodelingprep.com/api/v3/enterprise-value/${ticker}`)
//     .then(balanceSheetResponse => response.json(balanceSheetResponse.data))
// })

app.get('/api/companyBundle/:ticker', async (request, response) => {
  const { ticker } = request.params;
  const requests = [
    axios.get(`https://financialmodelingprep.com/api/v3/company/profile/${ticker}`),
    axios.get(`https://financialmodelingprep.com/api/v3/financials/balance-sheet-statement/${ticker}`),
    axios.get(`https://financialmodelingprep.com/api/v3/financials/income-statement/${ticker}`),
    axios.get(`https://financialmodelingprep.com/api/v3/enterprise-value/${ticker}`),
  ]
  const [companyProfile, balanceSheet, incomeStatement, enterpriseValue] =
          (await Promise.all(requests)).map(response => response.data)
  response.json({ companyProfile, balanceSheet, incomeStatement, enterpriseValue})
})



app.get('/api/v3/company/stock/list', async (_, response) => {
  const { data } = await axios.get(`https://financialmodelingprep.com/api/v3/company/stock/list/`)
  response.send(data) 
})

// app.get('/api/v3/company/stock/list', (_, response) => {
//   axios.get(`https://financialmodelingprep.com/api/v3/company/stock/list`)
//     .then(balanceSheetResponse => response.json(balanceSheetResponse.data))
// })

// END DEMO

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')))
  // Handle React routing, return all requests to React app
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'client/build', 'index.html'))
  })
}

const port = process.env.PORT || 8080
app.listen(
  port,
  () => { console.log(`API listening on port ${port}...`) }
)
