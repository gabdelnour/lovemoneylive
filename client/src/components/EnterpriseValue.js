import React from 'react'

const EnterpriseValue = props => (
    <div>
      <h1 className="tableTitle">Balance Sheet</h1>
         <hr/>
        <table className="balanceSheet">
            <thead>
                <tr>
                    <th className="financialKeys">Financial Values: </th><th className="companyValues">Company</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="financialKeys">Date: </td><td className="companyValues">{props.date}</td>
                </tr>
                <tr>
                    <td className="financialKeys">Stock Price: </td><td className="companyValues">{props.stockPrice}</td>
                </tr>
                <tr>
                    <td className="financialKeys">Number of Shares: </td><td className="companyValues">{props.numberOfShares}</td>
                </tr>
                <tr>
                    <td className="financialKeys">Market Capitalization: </td><td className="companyValues">{props.marketCapitalization}</td>
                </tr>
                <tr>
                    <td className="financialKeys"> (-) Cash and (+) Cash Equivalents: </td><td className="companyValues">{props.cashCashEquivalents}</td>
                </tr>
                <tr>
                    <td className="financialKeys">(+) Total Debt: </td><td className="companyValues">{props.totalDebt}</td>
                </tr>
                <tr>
                    <td className="financialKeys">Enterprise Value </td><td className="companyValues">{props.enterpriseValue}</td>
                </tr>
            </tbody>
        </table>
    </div>
)

export default EnterpriseValue