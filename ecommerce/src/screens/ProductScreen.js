import { useParams } from "react-router-dom";
import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
} from "react-bootstrap";
import Rating from "../components/Rating";
import { listProductDetails } from "../actions/productActions";


// import products from "../products";
// console.log(products)
const ProductScreen = ({ match }) => {
  const dispatch = useDispatch();
  // console.log(match);
  // console.log(useParams());
  const { id } = useParams();

  //   const product = products.find((p) => String(p._id) === id);

  // if (!product) return null; // or fallback UI
  // const [product, setProduct] = useState({});

  useEffect(() => {
    dispatch(listProductDetails(id));
    // console.log("hello");
    // const fetchProduct = async () => {
    //   const { data } = await axios.get(`/api/products/${id}`);
    //   setProduct(data);
    // };
    // fetchProduct();
  }, [dispatch, id]);

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, product } = productDetails;
  // console.log(loading, product);
  return (
    <>
      {loading === false ? (
        <div>
          <Link className="btn btn-dark my-3" to="/">
            Go Back
          </Link>

          <Row>
            <Col md={6}>
              <Image src={product.image} alt={product.name} fluid></Image>
            </Col>
            <Col md={3}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>{product.name}</h3>
                </ListGroup.Item>
                <ListGroupItem>
                  <Rating
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                  />
                </ListGroupItem>
                <ListGroupItem>Price:${product.price}</ListGroupItem>
                <ListGroupItem>
                  Description:{product.description}
                </ListGroupItem>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup variant="flush">
                  <ListGroupItem>
                    <Row>
                      <Col>Price</Col>
                      <Col>
                        <strong>${product.price}</strong>
                      </Col>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                        {product.countInStock > 0
                          ? `In Stock`
                          : `Out of Stock`}
                      </Col>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Button
                      className="btn-block "
                      type="button"
                      disabled={product.countInStock === 0}
                    >
                      ADD To Cart
                    </Button>
                  </ListGroupItem>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </div>
      ) : (
        <p>Please wait....</p>
      )}
    </>
  );
};

export default ProductScreen;
