import React, { useEffect } from "react";
import {
  Link,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  card,
} from "react-bootstrap";
import Message from "../components/Message";
import { addToCart } from "../actions/cartActions";
const CartScreen = ({ match }) => {
  const search = useLocation().search;
  const { id } = useParams();

  const qty = new URLSearchParams(search).get("qty");

  console.log("qty" + qty);
  console.log("id" + id);

  
  const dispatch = useDispatch();
    // const cart = useSelector(state => state.car)
    // const {cartItems}
  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty));
    }
  }, [dispatch, qty, id]);

  return (
    <div>
      <h1>Add to CART</h1>
    </div>
  );
};

export default CartScreen;
