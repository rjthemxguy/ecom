import { useParams, useNavigate } from "react-router-dom"
import { Form } from "react-bootstrap"
import { useState } from "react"
import {Link} from "react-router-dom"
import products from "../products"
import {Row, Col , Image, ListGroup, Card, Button, ListGroupItem} from 'react-bootstrap'
import Rating from "../components/Rating"
import { useGetProductDetailQuery } from "../slices/productsApiSlice"
import Message from "../components/Message"
import {addToCart} from "../slices/cartSlice"
import { useDispatch } from "react-redux"

const ProductScreen = () => {

    
    const {id:productID} = useParams()

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [qty, setQty] = useState(1)

    

    const {data:product, isLoading, error} = useGetProductDetailQuery(productID);

    const addToCartHandler = () => {
      dispatch(addToCart({...product, qty}))
      navigate("/cart")
    }

  return (
    <>

    {isLoading ? (<h2>Loading</h2>) : error ? (<Message varient="danger">{error?.data?.message || error.error}</Message>) : (
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

      {product.countInStock > 0 && (
        <ListGroupItem>
          <Row>
            <Col>
            Qty:
            </Col>
            <Col>
            <Form.Control 
            as = "select"
            value = {qty}
            onChange = {(e)=> setQty(Number(e.target.value))}>

              {[...Array(product.countInStock).keys()].map((x)=>(
                <option key={x+1} value={x+1}>
                  {x+1}
                </option>
              ))
              }
            </Form.Control>  
            </Col>
          </Row>

        </ListGroupItem>
      )}

        <ListGroupItem>

          <Button className="btn-block " type="button"
           disabled = {product.countInStock === 0}
           onClick = {addToCartHandler}>
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
