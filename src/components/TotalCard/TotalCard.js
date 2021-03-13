import React from 'react';

import { Card, Container, Row, Col, ListGroup } from 'react-bootstrap';
import { Doughnut  } from '@reactchartjs/react-chart.js';
import './TotalCard.css';

const TotalCard = (props) => (
    <Container >
        <Row>
            <Col className='Colu'>
                <Card className='Card'>
                    <Card.Header as="h5">Cases</Card.Header>
                    <Card.Body >
                        <Card.Title>{props.current.actuals.cases}</Card.Title>
                        <Card.Text>
                        Total new cases: {props.current.actuals.newCases}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='Colu'>
                <Card className='Card'>
                <Card.Header as="h5">Deaths</Card.Header>
                    <Card.Body>
                        <Card.Title>{props.current.actuals.deaths}</Card.Title>
                        <Card.Text>
                        Total new deaths: {props.current.actuals.newDeaths}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='Colu'>
            <Card className='Card'>
            <ListGroup variant="flush">
                <ListGroup.Item>
                <h5>Test Results</h5>
                <Doughnut 
                    data={{
                    labels: ['Positive', 'Negative'],
                    datasets: [
                        {
                            label: "Cases",
                            borderWidth: 1,
                            backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)'
                            ],
                            borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)'
                            ],
                            hoverBackgroundColor: "#ed873e",
                            hoverBorderColor: "#e35f00",
                            data: [props.current.actuals.positiveTests, props.current.actuals.negativeTests],
                        }
                        ]
                    }}
                />
                </ListGroup.Item>
            </ListGroup>
            </Card>
            </Col>
        </Row>
    </Container>

  )
  
  export default TotalCard;