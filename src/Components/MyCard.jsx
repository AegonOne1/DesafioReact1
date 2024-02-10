import { Card, Button } from "react-bootstrap"
import Tags from "./Tags"

const MyCard = (props) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Tags colorBg={props.colorBg} textBg={props.textBg}/>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.titulo}</Card.Title>
                <Card.Text>
                    {props.descripcion}
                </Card.Text>
                <Button variant={props.ColorButton}>{props.BsButton}</Button>
            </Card.Body>
        </Card>
    )
}

export default MyCard