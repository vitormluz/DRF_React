import React, { useState, useEffect } from 'react'
import { LinkContainer } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card, ListGroupItem } from "react-bootstrap";
import Rating from "../components/Rating";
import { Link, useParams } from  'react-router-dom'
import axios from 'axios'


function ProductScreen() {
  const product_id = useParams()
  const [product, setProduct] = useState([])

  useEffect(() => {

    async function fetchProduct(){
      const { data } = await axios.get(`/api/products/${product_id.id}`)
      setProduct(data)
    }

    fetchProduct()
  
  }, [])
  return (
    <div>
        <Row>


          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>

          <Col md={3}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
               <h3>{product.name}</h3>
              </ListGroup.Item>

              <ListGroup.Item>
                <Rating value={product.rating} text={`${product.name} avaliações`} color={'#f8e825'}/>
              </ListGroup.Item>

              <ListGroup.Item>
                Preço: R$ {product.price}
              </ListGroup.Item>

              <ListGroup.Item>
                Descrição: {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>

          <Col md={3}>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <Row>
                    <Col>Preço:</Col>
                    <Col>
                      <strong>R${product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      <strong>{product.countInStock > 0 ? 'Em estoque' : 'Em falta'}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Button className='btn btn-block' disabled={product.countInStock == 0} type='button'>Adicionar ao carrinho</Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>


        </Row>
    </div>
  )
}

export default ProductScreen