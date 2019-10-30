if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require("express")
const path = require("path")
const app = express()
const axios = require('axios')

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

app.get('/api/stocklist', async (_, response) => {
  const { data } = await axios.get(`https://financialmodelingprep.com/api/v3/company/stock/list/`)
  response.send(data) 
})

app.get('/api/gainers', async (_, response) => {
  const { data } = await axios.get(`https://financialmodelingprep.com/api/v3/stock/gainers`)
  response.send(data.mostGainerStock) 
})


app.get('/api/losers', async (_, response) => {
  const { data } = await axios.get(`https://financialmodelingprep.com/api/v3/stock/losers`)
  response.send(data.mostLoserStock) 
})

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
