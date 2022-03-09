import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import { InputField, CheckboxField, SelectField } from '../../FormFields';

const useStyles = makeStyles(theme => ({
  container: {
      margin: theme.spacing(1),
    },
  label: {
      textTransform: 'none'
  }
}));

export default function AddressForm(props) {

  const classes = useStyles();

  const {
    formField: {
      irla
    }
  } = props;
  return (
    <React.Fragment>
      
      <Typography variant="h6" align="center" gutterBottom>
        View Personnel Details
      </Typography>
      
      <Grid container className={classes.container}>
        
        <Grid item xs={6}>
          <InputField name={irla.name} label={irla.label} fullWidth />
        </Grid>
      </Grid>
      
      <Grid container className={classes.container}>
        
      </Grid>
      
    </React.Fragment>
  );
}
