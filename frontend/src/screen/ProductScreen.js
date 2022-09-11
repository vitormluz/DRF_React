import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Image, ListGroup, Button, Card, Form } from "react-bootstrap";
import { useParams, useNavigate } from  'react-router-dom'
import { Link } from 'react-router-dom';

import { listProductDetails } from "../actions/productActions";
import Rating from "../components/Rating";
import Loader from "../components/Loader";
import Message from "../components/Message";

function ProductScreen({history}) {

  const [qty, setQty] = useState(1)

  const navigate = useNavigate()
  const product_id = useParams()
  const dispatch = useDispatch()
  const productDetails = useSelector(state => state.productDetails)
  const { loading, error, product } = productDetails

  useEffect(() => {
    dispatch(listProductDetails(product_id.id))
  
  }, [dispatch])

  const addToCartHandler = () => {
    navigate(`/cart/${product_id.id}?qtd=${qty}`)
  }

  return (
    <div>

        <Link to='/' className='btn btn-dark my-3'>Voltar</Link>

        {loading ?
          <Loader/>
            : error
              ? <Message variant='danger'>{error}</Message>
            :(
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

                    {product.countInStock > 0 && (
                      <ListGroup.Item>
                        <Row>
                          <Col>QTD</Col>
                          <Col xs='auto' className='my-1'>
                            <Form.Control
                              as='select'
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            >
                              {
        
                                [...Array(product.countInStock).keys()].map((x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                ))
                              }

                            </Form.Control>
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    )}
    
                    <ListGroup.Item>
                      <Button onClick={addToCartHandler} className='btn btn-block' disabled={product.countInStock === 0} type='button'>Adicionar ao carrinho</Button>
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
    
    
            </Row>
            )

        }


    </div>
  )
}

export default ProductScreen