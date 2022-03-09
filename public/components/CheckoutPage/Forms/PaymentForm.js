import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { InputField, DatePickerField } from '../../FormFields';

export default function PaymentForm(props) {
  const {
    formField: { 
      email,
    }
  } = props;

  return (
    <React.Fragment>
      <Typography variant="h6" align="center" gutterBottom>
        Other Details
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={5} style={{marginLeft:"2rem"}}>
        <InputField name={email.name} label={email.label} fullWidth />
        </Grid>
       </Grid> 
    </React.Fragment>
  );
}