import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import useStyles from './styles';

function PaymentDetails(props) {
  const { formValues } = props;
  const classes = useStyles();
  const { 
    fullName,
    irla,
    mobile
   } = formValues;
  return (
    <Grid item xs={12} sm={6}>
      <Typography variant="h6" gutterBottom className={classes.title}>
        Basic Information
      </Typography>
      <Typography gutterBottom>Name : {`${fullName}`}</Typography>
      <Typography gutterBottom>IRLA/REGIMENTAL NUMBER : {`${irla}`}</Typography>
      <Typography gutterBottom>Mobile : {`${mobile}`}</Typography>
      
    </Grid>
  );
}

export default PaymentDetails;
