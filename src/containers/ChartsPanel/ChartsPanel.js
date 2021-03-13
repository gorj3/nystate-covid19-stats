import React, { Component } from 'react';
import axios from 'axios';

import TotalCard from '../../components/TotalCard/TotalCard.js';
import LineChart from '../../components/LineChart/LineChart.js';
import {Container, Row, Col} from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner'


class ChartsPanel extends Component {
    state = {
        loading: true,
        loading2: true,
        error: false,
        today: ''
    }

    componentDidMount () {
        axios.get( 'https://api.covidactnow.org/v2/state/NY.json?apiKey=1da95672607a441580c5b16c707c79bd' )
            .then( response => {
                this.setState({current: response.data});
                //console.log( this.state.current.actuals );
                this.setState({loading: false});
            } )
            .catch(error => {
                console.log(error);
                this.setState({error: false});
            });

        axios.get( 'https://api.covidactnow.org/v2/state/NY.timeseries.json?apiKey=1da95672607a441580c5b16c707c79bd' )
            .then( res => {
                const actualsTimeseries = res.data.actualsTimeseries.reverse();
                const slicedTime = [];
                const maxVal = 9;
                const delta = Math.floor(actualsTimeseries.length / maxVal);
                
                for ( let i=1; i < actualsTimeseries.length; i=i+delta) {
                    slicedTime.push(actualsTimeseries[i]);
                }

                this.setState({historic: slicedTime.reverse()});
                this.setState({today: this.state.historic['9']['date']});
                console.log( this.state.today );
                this.setState({loading2: false});
            } )
            .catch(error => {
                console.log(error);
                this.setState({error: false});
            });

    }
    
    render () {
        let displayTotal = <TotalCard current={this.state.current}/>;
        //console.log( this.state.current );
        if (this.state.loading){
            displayTotal = <Spinner animation="border" role="status"><span className="sr-only">Loading...</span></Spinner>
        }

        let displayLine = <LineChart historic={this.state.historic}/>;
        //console.log( this.state.current );
        if (this.state.loading2){
            displayLine = <Spinner animation="border" role="status"><span className="sr-only">Loading...</span></Spinner>
        }

        return (
            <Container>
                <Row>
                    <h1>Total data</h1>
                </Row>
                <Row>
                    <h5>Using data from <a href="https://covidactnow.org/data-api" target="_blank" rel="noreferrer">Covid Act Now</a></h5>
                    <p>Displaying data from {this.state.today}</p>
                </Row>
                <Row>
                    <Col>
                        {displayTotal}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {displayLine}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ChartsPanel;