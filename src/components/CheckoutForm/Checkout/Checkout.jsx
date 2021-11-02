import React, { useState, useEffect } from "react";
import {
  CssBaseline,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,

  Button,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";

import { commerce } from "../../../lib/commerce";
import AddressForm from "../AddressForm";
import PaymentForm from "../PaymentForm";
import useStyles from "./styles";
import "./Confirmation.css"

const steps = ["Shipping address", "Payment details"];


function Checkout({cart, order, onCaptureCheckout, error}) {
  const [activeStep, setActiveStep] = useState(0)
  const [checkoutToken, setCheckoutToken] = useState(null)
  const [shippingData, setShippingData] = useState({})
  // const [ isFinished, setIsFinished] = useState(false)
  const classes = useStyles()
  const history = useHistory()

  useEffect(() => {
    if (cart.id) {
      const generateToken = async () => {
        try {
          const token = await commerce.checkout.generateToken(cart.id, {
            type: "cart",
          });

          setCheckoutToken(token);
        } catch {
          if (activeStep !== steps.length) history.push("/");
        }
      };

      generateToken();
    }
  }, [cart])

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1)
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1)

  let randomReferenceNumber = Math.floor(100000 + Math.random() * 900000)

const next = (data) => {
setShippingData(data)
nextStep()
  }
  
  // const timeout = () => {
  //   setTimeout(() => {
  //     setIsFinished(true)
  //   }, 3000);

  // }


  let Confirmation = () =>
    order.customer ? (
      <>
        <div className="confirmation-content">
          <div className="confirmation-wrapper-1">
            <div className="confirmation-wrapper-2">
              <h1>Thank you !</h1>
              <p>Thanks you for your purchase, {order.customer.firstname} {order.customer.lastname}</p>
              <p>you should receive a confirmation email soon </p>
              <Link to="/">
              <button className="go-home">go home</button></Link>
            </div>
            <div className="confirmation-footer">
              <p>Order ref: <span className="order-ref">{randomReferenceNumber}</span></p>
            </div>
          </div>
        </div>
      </>
    ) :  (
      <div className={classes.spinner}>
        <CircularProgress />
      </div>
    );

  if(error){
    Confirmation = () => (
      <>
        <Typography variant="h5">Error: {error}</Typography>
        <br />
        <Button component={Link} variant="outlined" type="button" to="/">
          Back to home
        </Button>
      </>
    );
  }

  const Form = () => activeStep === 0 ? <AddressForm checkoutToken={checkoutToken} next={next} setShippingData={setShippingData} nextStep={nextStep}/> : 
  <PaymentForm shippingData={shippingData} checkoutToken={checkoutToken} nextStep={nextStep}backStep={backStep} onCaptureCheckout={onCaptureCheckout} />
  return (
    <>
    <CssBaseline/>
    <div>
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">Checkout</Typography>
          <Stepper activeStep={0} className={classes.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
                </Step>
            ))}
          </Stepper>
          { activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form/>}
        </Paper>

      </main>
    </div>
      </>
  )
}

export default Checkout
