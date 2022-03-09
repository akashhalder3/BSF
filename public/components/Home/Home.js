import React from 'react'
import {
    BrowserRouter as Router,
    Route, 
    Link, 
  } from "react-router-dom";
import CheckoutPage from '../CheckoutPage/CheckoutPage';
import SearchPersonnel from '../SearchPersonnel/SearchPersonnelPage';
import { Card, makeStyles, Button, Typography } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Grid, Paper } from '@material-ui/core';

const buttonUseStyles = makeStyles((theme) => ({
    button: {
        '& > *': {
           
            marginBox: theme.spacing(1)
        },
  
    },
    
}));
const useStyles = makeStyles({
    root: {
      minWidth: '100',
      maxWidth: '150'
    },
    
    title: {
      fontSize: 5,
    },
  });

export default function () {
    const buttonClasses= buttonUseStyles();
    const classes = useStyles();
    return (
        <div>
            <h1>Home</h1>
            <img src='../../images/BSF_logo.png' alt='logo' width='200px' height='250px'/>
        </div>
    )
}