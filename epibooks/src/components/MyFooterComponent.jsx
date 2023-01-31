import Card from 'react-bootstrap/Card';

const footerComponent  = (props) =>{
    return <Card body  bg="dark" text="light">For more information, don't hesitate to contact us at {props.link} </Card>;
}

export default footerComponent;