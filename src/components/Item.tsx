import { Button, Card } from "react-bootstrap"
import logo from "../logo.svg"


const Item = () =>{

    return(
<Card className="text-center" style={{ minWidth: '10rem', margin: '20px' }}>
  <Card.Img variant="top" src={logo} />
  <Card.Body>
    <Card.Title>Example Card</Card.Title>
    <Card.Text>This is an example React card</Card.Text>
    <Button variant="primary">Example Button</Button>
  </Card.Body>
</Card>
    )
}

export default Item;