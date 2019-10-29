import React from 'react';

const IncomeStatement = props => (
    <div>
        <h1>IncomeStatement</h1>
        <hr/>
        <table>
            <thead>
                <tr>
                    <th>Financial Data</th><th>Company</th>
                </tr>
            </thead>
            <body>
                <tr>
                    <td>EPS: </td><td>{props.eps}</td>
                </tr>
                <tr>
                    <td>EPS diluted: </td><td>{props.epsDiluted}</td>
                </tr>
                <tr>
                    <td>Net Income: </td><td>{props.netIncome}</td>
                </tr>
                <tr>
                    <td>EBITDA </td><td>{props.EBITDA}</td>
                </tr>
                <tr>
                    <td>Gross Profit: </td><td>{props.grossProfit}</td>
                </tr>
                <tr>
                    <td>Profit Margin </td><td>{props.profitMargin}</td>
                </tr>
                <tr>
                    <td>Revenue: </td><td>{props.revenue}</td>
                </tr>
                <tr>
                    <td>Revenue Growth: </td><td>{props.revenueGrowth}</td>
                </tr>
            </body>
        </table>
    </div>
)

export default IncomeStatement