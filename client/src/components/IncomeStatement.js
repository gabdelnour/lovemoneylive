import React from 'react';

const IncomeStatement = props => (
    <div>
        <h1 className="tableTitle">IncomeStatement</h1>
        <hr/>
        <table className="incomeStatement">
            <thead>
                <tr>
                    <th className="financialKeys">Financial Data</th><th className="companyValues">Company</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="financialKeys">EPS: </td><td className="companyValues">{props.eps}</td>
                </tr>
                <tr>
                    <td className="financialKeys">EPS diluted: </td><td className="companyValues">{props.epsDiluted}</td>
                </tr>
                <tr>
                    <td className="financialKeys">Net Income: </td><td className="companyValues">{props.netIncome}</td>
                </tr>
                <tr>
                    <td className="financialKeys">EBITDA </td><td className="companyValues">{props.EBITDA}</td>
                </tr>
                <tr>
                    <td className="financialKeys">Gross Profit: </td><td className="companyValues">{props.grossProfit}</td>
                </tr>
                <tr>
                    <td className="financialKeys">Profit Margin </td><td className="companyValues">{props.profitMargin}</td>
                </tr>
                <tr>
                    <td className="financialKeys">Revenue: </td><td className="companyValues">{props.revenue}</td>
                </tr>
                <tr>
                    <td className="financialKeys">Revenue Growth: </td><td className="companyValues">{props.revenueGrowth}</td>
                </tr>
            </tbody>
        </table>
    </div>
)

export default IncomeStatement