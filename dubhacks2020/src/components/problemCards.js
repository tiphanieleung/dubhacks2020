import React, { useState } from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText } from 'reactstrap';
import '../style.css';

function ProblemCard() {
    let [titleInput, setTitleInput] = useState('');
    let [mainTextInput, setMainTextInput] = useState('');

    return (
        <div>
        <Card style={{ width: '16rem', padding: '15px', borderStyle: 'solid', borderRadius: '10px', textAlign: 'center', borderWidth: 'medium', borderColor: 'blue'}}>
          <CardHeader><input placeholder={'Add a new problem!'} style={{borderStyle: 'none', fontWeight: 'bold'}} type='text' name='title' value={titleInput} onChange={(e) => setTitleInput(e.target.value)} /></CardHeader>
          <CardBody>
            <CardTitle><div style={{borderTop: '3px solid blue', margin: '10px'}}></div></CardTitle>
            <CardText>
                <textarea rows={12} placeholder={'Add notes for this problem'} style={{borderStyle: 'none', fontSize: '11px', width: '90%', fontWeight: 'bold', resize: 'none'}} type='textarea' name='title' value={mainTextInput} onChange={(e) => setMainTextInput(e.target.value)} /></CardText>
          </CardBody>
        </Card>
        </div>
    )
}

function ProblemDisplayCard() {
    return (
        <div style={{borderStyle: 'dashed', width: '14rem', padding: '5px', borderStyle: 'solid', borderRadius: '30px', textAlign: 'center', borderWidth: 'medium', borderColor: 'blue', fontWeight: 'bold'}}>
        SAasfttt sdh sdghdg dfghdfh dfghdfgh sdfg sdfg dfg sd fgsdfgsdfg sdfgsdfgs sdfgsdfgsg sdfgsdfg 
        </div>
    )
}

export {
    ProblemCard,
    ProblemDisplayCard,
}
