import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import useStyles from './styles';

function PaymentDetails(props) {
  const { formValues } = props;
  const classes = useStyles();
  const { 
    
    irla,
    
   } = formValues;
  return (
    <Grid item xs={12} sm={6}>
      <Typography variant="h6" gutterBottom className={classes.title}>
        Basic Information
      </Typography>
      
      <Typography gutterBottom>Mobile : {`${mobile}`}</Typography>
      
    </Grid>
  );
}

export default PaymentDetails;
