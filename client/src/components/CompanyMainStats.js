import React from 'react'

const CompanyMainStats = props => (
    <div className="companyMainStats">
        <div id="TOP">
            <div id="companyLogo">
                <img src={props.image} alt="company's logo"/>
            </div>
            <div id="topRowText">
                <div>
                    <h1 id="companyName">{props.companyName}</h1>
                </div>
                <div>
                    <h5 id="companySymbol">{props.symbol}</h5>
                    <h5 id="exchange">{props.exchange}</h5>
                </div>
            </div>
        </div>
        <div id="Bottom">
            <div id="priceData">
                <div>
                    <h1 id="price">{props.price}</h1>
                    <h3 id="currency">USD</h3>
                </div>
                <div>
                    <h2 id="changes">{props.changes}</h2>
                    <h2 id="changesPercentage">{props.changesPercentage}</h2>
                </div>
            </div>
            <div>
                <h1 id="mktCap">{props.mktCap}</h1>
                <h1 id="eps">{props.eps}</h1>
            </div>

        </div>
    </div>


)

export default CompanyMainStats
