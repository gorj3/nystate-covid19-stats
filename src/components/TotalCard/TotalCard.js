import React from 'react';

import { Card, Container, Row, Col, ListGroup } from 'react-bootstrap';
import { Doughnut  } from '@reactchartjs/react-chart.js';

const TotalCard = (props) => (
    <Container >
        <Row>
            <Col >
                <Card >
                    <Card.Body >
                        <Card.Title>{props.current.actuals.cases}</Card.Title>
                        <Card.Text>
                        Cases
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card >
                    <Card.Body>
                        <Card.Title>{props.current.actuals.deaths}</Card.Title>
                        <Card.Text>
                        Deaths
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col >
            <Card >
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
                <ListGroup.Item>Total new cases: {props.current.actuals.newCases}</ListGroup.Item>
                <ListGroup.Item>Total new deaths: {props.current.actuals.newDeaths}</ListGroup.Item>
            </ListGroup>
            </Card>
            </Col>
        </Row>
    </Container>

  )
  
  export default TotalCard;