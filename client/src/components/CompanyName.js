import React from 'react';

const CompanyProfileBlock = props => (
        <div>
            <h1>Company Profile</h1>
            <hr/>
            <h2>Company name: {props.companyName}</h2>
            <h2>CEO: {props.ceo}</h2>
            <h2>Company Industry: {props.industry}</h2>
            <h2>Industry Sector: {props.sector}</h2>
            <h3>Company Description: {props.description}</h3>
        </div>
)

export default CompanyProfileBlock;
