import React, { useState, useEffect } from "react";
import {
  CssBaseline,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Box,
  Button,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import useStyles from "./styles";
import { commerce } from "../../../lib/commerce";
import AddressForm from "../AddressForm";
import PaymentFrom from "../PaymentFrom";
const steps = ["Shipping Address", "Payment Details"];
const Checkout = ({ cart }) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);
  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: "cart",
        });
        console.log(token);
        setCheckoutToken(token);
      } catch (error) {}
    };
    generateToken();
  }, [cart]);
  const Confirmation = () => {
    <div>Confirmation</div>;
  };
  const Form = () => {
    return (
      <>
        {activeStep === 0 ? (
          <AddressForm checkoutToken={checkoutToken} />
        ) : (
          <PaymentFrom />
        )}
      </>
    );
  };

  return (
    <>
      <Box className={classes.toolbar} />
      <Box className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h3" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={0} className={classes.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <Confirmation />
          ) : (
            checkoutToken && <Form />
          )}
        </Paper>
      </Box>
    </>
  );
};

export default Checkout;
