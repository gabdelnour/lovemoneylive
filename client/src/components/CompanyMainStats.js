import React from 'react'
import '../cssFiles/CompanyMainStats.css'

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
            </div>
            <div id="exchange">
                <h1>{props.exchange}</h1>
            </div>
        </div>
        <div id="Bottom">
            <div id="priceData">
                <div id="priceCurrency">
                    <div>
                        <h1 id="price">{props.price}</h1>
                    </div>
                    <div>
                        <h2 id="currency">USD</h2>
                </div>  
                <div className="changes">
                    <h2>{props.changes}</h2>
                </div>
                <div>
                    <h2 id="changesPercentage">{props.changesPercentage}</h2>
                </div>
                </div>
            </div>
            <div className="mktCpEPS">
                <h1 id="mktCap">Market Cap: {props.mktCap}</h1>
                <h1 id="eps">EPS: {props.eps}</h1>
            </div>

        </div>
    </div>


)

export default CompanyMainStats
