import React from 'react';
import '../cssFiles/CompanyName.css'


const CompanyProfileBlock = props => (
        <div className="ProfileWrapper">
                <div>
                    <h1>Company Profile</h1>
                    <hr/>
                    <div className="row">
                        <div className="profileData">
                            <h2>Company: </h2>
                        </div>
                        <div className="companyProfileData">
                            <h2>{props.companyName}</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="profileData">
                            <h2>CEO: </h2>
                        </div>
                        <div className="companyProfileData">
                            <h2>{props.ceo}</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="profileData">
                            <h2>Industry: </h2>
                        </div>
                        <div className="companyProfileData">
                            <h2>{props.industry}</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="profileData">
                            <h2>Sector: </h2>
                        </div>
                        <div className="companyProfileData">
                            <h2>{props.sector}</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="profileData">
                            <h2>Description: </h2>
                        </div>
                        <div className="companyProfileData">
                            <h2>   {props.description}</h2>
                        </div>
                    </div>
                </div>
                <div className="marginRight">
            </div>
        </div>
)

export default CompanyProfileBlock;
