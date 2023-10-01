import {Row, Col} from 'react-bootstrap'
import Product from '../components/Product'
import { useGetProductsQuery } from '../slices/productsApiSlice'
import {Spinner} from 'react-bootstrap'
import Message from '../components/Message'
const HomeScreen = () => {

  const  {data:products, isLoading, error} = useGetProductsQuery();
  

  return (
      <>
    

    {isLoading ? (<Spinner/>) : error ? (<Message varient="danger">{error?.data?.message || error.error}</Message>) : (<>
      
      <Row>

        {products.map((product) =>(
            <Col sm={12} md={6} lg={4} xl={3}>
                <Product product={product}/>

            </Col>

        ))}
      </Row>
    
    </>)}

      
    </>
  )
}

export default HomeScreen
