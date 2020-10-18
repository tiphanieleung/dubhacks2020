import React, { useState } from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText } from 'reactstrap';
import '../style.css';

// OPTIONAL: pass in the title and mainText for display: props.title and or props.mainText
function TitleAndMainTextCard(props) {
    let [titleInput, setTitleInput] = useState(props.title);
    let [mainTextInput, setMainTextInput] = useState(props.mainText);

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

// need to pass in the TITLE for display: props.title
function TitleOnlyDisplayCard(props) {
    return (
        <div style={{borderStyle: 'dashed', width: '14rem', padding: '5px', borderStyle: 'solid', borderRadius: '30px', textAlign: 'center', borderWidth: 'medium', borderColor: 'blue', fontWeight: 'bold'}}>
            {props.title}
        </div>
    )
}

// OPTIONAL: pass in the mainText for display: props.mainText
function TextInputCard(props) {
    let [mainTextInput, setMainTextInput] = useState(props.mainText);
    return (
        <div style={{borderStyle: 'dashed', width: '14rem', padding: '5px', borderStyle: 'solid', borderRadius: '30px', textAlign: 'center', borderWidth: 'medium', borderColor: 'blue', fontWeight: 'bold'}}>
            <textarea rows={15} placeholder={'Start typing away your frustrations!'} style={{borderStyle: 'none', fontSize: '11px', width: '90%', fontWeight: 'bold', resize: 'none'}} type='textarea' name='title' value={mainTextInput} onChange={(e) => setMainTextInput(e.target.value)} />
        </div>
    )
}

export {
    TitleAndMainTextCard,
    TitleOnlyDisplayCard,
    TextInputCard,
}
