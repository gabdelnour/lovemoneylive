import React from 'react'

const EnterpriseValue = props => (
    <div>
      <h1 className="tableTitle">Enterprise Value</h1>
         <hr/>
        <table className="balanceSheet">
            <thead>
                <tr>
                    <th className="financialKeys">Financial Values: </th><th className="companyValues">Company</th>
                </tr>
            </thead>
            <tbody>
                {
                    Object.keys(props).map(prop => (
                        <tr key={prop}>
                            <td className="financialKeys">
                                {prop}:
                            </td>
                            <td className="companyValues">
                                {Number(props[prop]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
)

export default EnterpriseValue