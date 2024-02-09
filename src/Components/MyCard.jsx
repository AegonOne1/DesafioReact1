
import { Card, Button } from "react-bootstrap"


const MyCard = (props) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.titulo}</Card.Title>
                <Card.Text>
                    {props.descripcion}
                </Card.Text>
                <Button variant="primary">{props.BsButton}</Button>
            </Card.Body>
        </Card>
    )
}

export default MyCard