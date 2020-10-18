import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText } from 'reactstrap';
import '../style.css';

function ProblemCard() {
    return (
        <div>
        <Card style={{ width: '15rem', padding: '15px', borderStyle: 'solid', borderRadius: '15px'}}>
          <CardHeader><input style={{borderStyle: 'none'}} type='text' name='title' value={'test'} /></CardHeader>
          <CardBody>
            <CardTitle>Special Title Treatment</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          </CardBody>
        </Card>
        </div>
    )
}

export default ProblemCard;
