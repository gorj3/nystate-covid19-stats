import React, { Component } from 'react';
import axios from 'axios';

import TotalCard from '../../components/TotalCard/TotalCard.js';
import LineChart from '../../components/LineChart/LineChart.js';
import {Container, Row, Col} from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import '../ChartsPanel.css';


class ChartsPanel extends Component {
    state = {
        loading: true,
        loading2: true,
        error: false,
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
                const maxVal = 10;
                const delta = Math.floor(actualsTimeseries.length / maxVal);
                
                for ( let i=0; i < actualsTimeseries.length; i=i+delta) {
                    slicedTime.push(actualsTimeseries[i]);
                }

                this.setState({historic: slicedTime.reverse()});
                //this.setState({today: this.state.historic['9']['date']});
                //console.log( this.state.historic['0'] );
                this.setState({loading2: false});
            } )
            .catch(error => {
                console.log(error);
                this.setState({error: false});
            });

    }
    
    render () {
        let displayTotal = <Spinner animation="border" role="status"><span className="sr-only">Loading...</span></Spinner>
        //console.log( this.state.current );
        if (!this.state.loading){
            displayTotal = <TotalCard current={this.state.current}/>;
        }

        let displayLine = <Spinner animation="border" role="status"><span className="sr-only">Loading...</span></Spinner>;
        //console.log( this.state.current );
        if (!this.state.loading2){
            displayLine = <LineChart historic={this.state.historic}/>;
            //console.log( this.state.historic );
        }
        

        return (
            <div >
            <Container>
                <Row>
                    <p className="Header">Using data from <a href="https://covidactnow.org/data-api" target="_blank" rel="noreferrer">Covid Act Now</a></p>
                </Row>
                <Row>
                    <p className="Header">Total current data:</p>
                </Row>
                <Row className='Part'>
                    <Col>
                    {displayTotal}
                    </Col>
                </Row>
                <Row>
                    <p className="Header">Total historical data:</p>
                </Row>
                <Row>
                    <Col>
                    {displayLine}
                    </Col>
                </Row>
            </Container>
            </div>

        );
    }
}

export default ChartsPanel;