import React from 'react'
import Plot from 'react-plotly.js' // apparently we have to explicitly reference this including the extension...?
import '../HomeCSS.css'

class Stockchart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            timeline: [],
            approxPrice: []
        }
    }

    componentDidMount() {
        this.getChartItems()
    }

    componentDidUpdate(prevProps){
        if(prevProps.ticker !== this.props.ticker){
            this.getChartItems()
        }
    }

    getChartItems = () => {
        let ticker = this.props.ticker
        let ChartGet = `https://financialmodelingprep.com/api/v3/historical-price-full/${ticker}`
        let timelineFunction = []
        let approxPriceFunction = []

    fetch(ChartGet)
        .then(
            function(response) {
                return response.json()
            }
        )
        .then(data =>{
            const {historical} = data
             historical.forEach(day => {
                timelineFunction.push(day.date)
                approxPriceFunction.push(day.close)  
                this.setState({timeline: timelineFunction, approxPrice: approxPriceFunction})
            })
        }
        )
    }

    render() {
        return (
            <div className="home-chart">
                <h2>Hey, here is your stock market chart for the last 5 Years:</h2>
                    <Plot
                    data={[{
                            x: this.state.timeline,
                            y: this.state.approxPrice,
                            type: 'scatter',
                            mode: 'lines+points',
                            marker: {color: 'chartreuse'},
                        }]}
                    layout={ {width: 800, height: 500, title: this.props.ticker} }
                    />
            </div>
        )
    }

}

export default Stockchart
