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
                {
                    // Object.keys(props).map(prop => (
                    //     <tr key={prop}>
                    //         <td className="financialKeys">
                    //             {prop}:
                    //         </td>
                    //         <td className="companyValues">
                    //             {props[prop]}
                    //         </td>
                    //     </tr>
                    // ))
                }
                <tr>
                    <td className="financialKeys">EPS: </td><td className="companyValues">{props.EPS}</td>
                </tr>
                <tr>
                    <td className="financialKeys">EPS diluted: </td><td className="companyValues">{props['EPS Diluted']}</td>
                </tr>
                <tr>
                    <td className="financialKeys">Net Income: </td><td className="companyValues">{props['Net Income']}</td>
                </tr>
                <tr>
                    <td className="financialKeys">EBITDA </td><td className="companyValues">{props.EBITDA}</td>
                </tr>
                <tr>
                    <td className="financialKeys">Gross Profit: </td><td className="companyValues">{props['Gross Profit']}</td>
                </tr>
                <tr>
                    <td className="financialKeys">Profit Margin </td><td className="companyValues">{props['Profit Margin']}</td>
                </tr>
                <tr>
                    <td className="financialKeys">Revenue: </td><td className="companyValues">{props.Revenue}</td>
                </tr>
                <tr>
                    <td className="financialKeys">Revenue Growth: </td><td className="companyValues">{props['Revenue Growth']}</td>
                </tr>
            </tbody>
        </table>
    </div>
)

export default IncomeStatement
