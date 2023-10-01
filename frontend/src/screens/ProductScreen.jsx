import { useParams } from "react-router-dom"
import {Link} from "react-router-dom"
import products from "../products"
import {Row, Col , Image, ListGroup, Card, Button, ListGroupItem} from 'react-bootstrap'
import Rating from "../components/Rating"
import { useGetProductDetailQuery } from "../slices/productsApiSlice"

const ProductScreen = () => {

    
    const {id:productID} = useParams()

    const {data:product, isLoading, error} = useGetProductDetailQuery(productID);


  return (
    <>

    {isLoading ? (<h2>Loading</h2>) : (
      <>
      <Link className="btn btn-light my-3" to="/">Go Back</Link>  

<Row>
  
  <Col md={5}>
    <Image src={product.image} fluid/>
  </Col> 

  <Col md={4}>
    <ListGroup varient="flush">
      <ListGroup.Item>
        <h3>{product.name}</h3>
      </ListGroup.Item>
      <ListGroup.Item>
        <Rating value={product.rating} text = {`${product.numReviews} reviews`}/>
      </ListGroup.Item>
      <ListGroupItem>
        Description: {product.description}
      </ListGroupItem>
    </ListGroup>

  </Col>

  <Col md={3}>
    <Card>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <Row>
            <Col>Price:</Col>
            <Col>
              <strong>${product.price}</strong>
            </Col>
          </Row>

        </ListGroup.Item>
        <ListGroup.Item>
          <Row>
            <Col>Status:</Col>
            <Col>
              <strong>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</strong>
            </Col>
          </Row>

        </ListGroup.Item>

        <ListGroupItem>

          <Button className="btn-block " type="button" disabled = {product.countInStock === 0}>
            Add to Cart
          </Button>
        </ListGroupItem>


      </ListGroup>  
    </Card>        
  </Col> 

  
</Row> 
      </>
    )}

    
    </>
  )
}

export default ProductScreen
