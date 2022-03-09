import React from 'react';
import moment from 'moment';
import { Typography, Grid } from '@material-ui/core';
import useStyles from './styles';

function PaymentDetails(props) {
  const { formValues } = props;

  
  const classes = useStyles();
  
  const { 
    email,
    ipfsHash 
  } = formValues;
  return (
    <Grid item container direction="column" xs={12} sm={6}>
      <Typography variant="h6" gutterBottom className={classes.title}>
        Other Details
      </Typography>
      <Grid container>
        <React.Fragment>
          <Grid item xs={6}>
            <Typography gutterBottom>Email</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{ email }</Typography>
          </Grid>
        </React.Fragment>
        
        
  
      </Grid>
    </Grid>
  );
}

export default PaymentDetails;
