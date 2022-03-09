import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import { InputField, CheckboxField, SelectField } from '../../FormFields';

const useStyles = makeStyles(theme => ({
  container: {
      
    },
  label: {
      textTransform: 'none'
  }
}));

export default function AddressForm(props) {

  const classes = useStyles();

  const {
    formField: {
      fullName,
      irla,
      mobile,
      unit,
      rank,
      parentunit,
      rankhs,
      appointment,
      dojg,
      sbsf,
    }
  } = props;
  return (
    <React.Fragment>
      
      <Typography variant="h6" align="center" gutterBottom>
        Basic Details
      </Typography>
      
      <Grid container spacing={2} className={classes.container}>
        <Grid item xs={5} >
          <InputField name={fullName.name} label={fullName.label} fullWidth />
        </Grid>
      
        <Grid item xs={5}>
          <InputField name={irla.name} label={irla.label} fullWidth />
        </Grid>

      </Grid>
      
      <Grid container spacing={2} className={classes.container}>
        <Grid item xs={5}>
          <InputField name={mobile.name} label={mobile.label} fullWidth />
        </Grid>
        <Grid item xs={5}>
          <InputField name={rank.name} label={rank.label} fullWidth />
        </Grid>
      </Grid>

      <Grid container spacing={2} className={classes.container}>
        <Grid item xs={5}>
          <InputField name={unit.name} label={unit.label} fullWidth />
        </Grid>
        <Grid item xs={5}>
          <InputField name={parentunit.name} label={parentunit.label} fullWidth />
        </Grid>
      </Grid>

      <Grid container spacing={2} className={classes.container}>
        <Grid item xs={5}>
          <InputField name={rankhs.name} label={rankhs.label} fullWidth />
        </Grid>
        <Grid item xs={5}>
          <InputField name={appointment.name} label={appointment.label} fullWidth />
        </Grid>
      </Grid>

      <Grid container spacing={2} className={classes.container}>
        <Grid item xs={5}>
          <InputField name={dojg.name} label={dojg.label} fullWidth />
        </Grid>
        <Grid item xs={5}>
          <InputField name={sbsf.name} label={sbsf.label} fullWidth />
        </Grid>
      </Grid>
      
    </React.Fragment>
  );
}
