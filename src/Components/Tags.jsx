import Badge from 'react-bootstrap/Badge'

const Tags = (props) => {
  return (
        <Badge bg={props.colorBg}>{props.textBg}</Badge>
  );
}

export default Tags;