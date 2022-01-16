import React from "react";
import { Container, Button, Grid, Typography, Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import CardItem from "./CartItem/CartItem";
const Cart = ({
  cart,
  handleEmptyCart,
  handleRemoveFromCart,
  handleUpdateCartQty,
}) => {
  const classes = useStyles();
  const EmptyCard = () => (
    <>
      <Typography variant="subtitle1"> Your Cart is Empty</Typography>
      <Link to="/" className={classes.link}>
        Add Some Items
      </Link>
    </>
  );

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CardItem
              item={item}
              onUpdateCartQty={handleUpdateCartQty}
              onRemoveFromCart={handleRemoveFromCart}
            />
          </Grid>
        ))}
      </Grid>
      <Box className={classes.cartDetails}>
        <Typography variant="h4">
          SubTotal:{cart.subtotal.formatted_with_symbol}
        </Typography>
        <Box>
          <Button
            className={classes.emptyButton}
            color="secondary"
            size="large"
            type="button"
            variant="contained"
            onClick={handleEmptyCart}
          >
            Empty Cart
          </Button>
          <Button
            className={classes.checkoutButton}
            color="primary"
            size="large"
            type="button"
            variant="contained"
            component={Link}
            to="/checkout"
          >
            Checkout
          </Button>
        </Box>
      </Box>
    </>
  );
  if (!cart.line_items) return "Loading........";
  return (
    <Container>
      <Box className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>
        Your Shopping Cart
      </Typography>
      {!cart.line_items.length ? <EmptyCard /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
