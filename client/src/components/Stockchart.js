import React from 'react'
import Plot from 'react-plotly.js'
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

    getChartItems() {
        const timeframe = this
        console.log(timeframe )
        let ticker = 'AAPL'
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
                timeframe.setState({timeline: timelineFunction, approxPrice: approxPriceFunction})
            })
        }
        )
    }

    render() {
        return (
            <div className="home-chart">
                <h2>Hey, here is your stock market chart for the last 5 Years.</h2>
                    <Plot
                    data={[{
                            x: this.state.timeline,
                            y: this.state.approxPrice,
                            type: 'scatter',
                            mode: 'lines+points',
                            marker: {color: 'chartreuse'},
                        }]}
                    layout={ {width: 800, height: 500, title: `L$VELIFE`} }
                    />
            </div>
        )
    }

}

export default Stockchart