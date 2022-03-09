import React, { useState } from 'react';
import Web3 from 'web3'
import UserData from '../../../build/contracts/UserData.json';
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  CircularProgress,
  makeStyles
} from '@material-ui/core';
import { Formik, Form } from 'formik';

import AddressForm from './Forms/AddressForm';
import PaymentForm from './Forms/PaymentForm';
import ReviewOrder from './ReviewOrder';
import CheckoutSuccess from '../../../client/CheckoutSuccess';


import validationSchema from './FormModel/validationSchema';
import checkoutFormModel from './FormModel/checkoutFormModel';
import formInitialValues from './FormModel/formInitialValues';
import { result, values } from 'lodash';

global.globalString = "string";
let a;

const steps = ['Basic Details', 'Other Details', 'Review Details'];
const { formId, formField } = checkoutFormModel;


const useStyles = makeStyles(theme => ({
  stepper: {
    padding: theme.spacing(3, 0, 5)
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1)
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative'
  },
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%'
  }
}));

function _renderStepContent(step) {
    switch (step) {
      case 0:
        return <AddressForm formField={formField} />;
      case 1:
        return <PaymentForm formField={formField} />;
      case 2:
        return <ReviewOrder />;
      default:
        return <div>Not Found</div>;
    }
  }

  export default function CheckoutPage() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const currentValidationSchema = validationSchema[activeStep];
    const isLastStep = activeStep === steps.length - 1;

    function _sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    async function _submitForm(values, actions) {
      await _sleep(1000);
      alert(JSON.stringify(values, null, 2));

      globalString = JSON.stringify(values, null, 2);
      


      let web3;
      let userData;

      const ipfs = require("nano-ipfs-store").at("https://ipfs.infura.io:5001");

      //Initialize Web3
      const initWeb3 = () => {
        return new Promise((resolve, reject) => {
        if(typeof window.ethereum !== 'undefined') {
        const web3 = new Web3(window.ethereum);

        window.ethereum.enable()
        .then(() => {
            resolve(
            new Web3(window.ethereum)
            );
        })
        return;
      }
      if(typeof window.web3 !== 'undefined') {
        return resolve(
        new Web3(window.web3.currentProvider)
        );
      }
      resolve(new Web3('http://localhost:9545'));
        });
      };

      const initContract = () => {
        const deploymentKey = Object.keys(UserData.networks)[0];
        
        return new web3.eth.Contract(
          UserData.abi, 
          UserData
            .networks[deploymentKey]
            .address
        );
      };

      
      const initApp = async() =>{
        const $addData = globalString;
        console.log('addData in checkoutpage'+ $addData)
        
        let accounts = [];
        
        await web3.eth.getAccounts()
          .then(_accounts => {
            accounts = _accounts;
          });
      
        
          const data = JSON.stringify(values, null, 2);
          const name = values.fullName;
          const irla = values.irla;
          const mobile = values.mobile;
          const email = values.email;
          const ipfshash = await ipfs.add(data);
          console.log(ipfshash)
          console.log(ipfshash[0])


         /* var jsonObj = JSON.parse(data);
          var jsonStr = JSON.stringify(jsonObj);
          const buff = Buffer.from(jsonStr);
          console.log(buff)
          ipfs.add(buff, (err, result)=>{
            console.log('ipfs result', result.size)
            if(err){
              console.err(err)
              return "Error"
            }
            var a = `${result[0].hash}`

          })*/

          //const ipfshash = ipfs.add(data);
          

          /*ipfs.add(data, (err, res)=>{
            console.log('ipfs result', res.size)
            if(err){
              console.err(err)
              return
            }
          })*/

          //console.log(a)
          //const get_ipfshash

          userData.methods
            .insertData(name, irla, ipfshash, mobile, email)
            .send({from: accounts[0]})
            .then(result =>{
              alert('data inserted')
            })
            .catch(
              alert('Please wait for METAMASK popup. After popup arives press confirm button')
            );
      
      };
      
      initWeb3()
      .then(_web3 => {
        web3 = _web3;
        userData = initContract();
        initApp(); 
      })
      .catch(e => console.log(e.message));    
      
      
      actions.setSubmitting(false);
      
      setActiveStep(activeStep + 1);
    }


    function _handleSubmit(values, actions) {
      if (isLastStep) {
        _submitForm(values, actions);
      } else {
        setActiveStep(activeStep + 1);
        actions.setTouched({});
        actions.setSubmitting(false);
      }
    }
  
    function _handleBack() {
      setActiveStep(activeStep - 1);
    }

    return (

      <React.Fragment>
      <Typography component="h1" variant="h4" align="center">
        BSF Personnel Management System
      </Typography>
      <Stepper activeStep={activeStep} className={classes.stepper}>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <React.Fragment>
        {activeStep === steps.length ? (
          <CheckoutSuccess />
        ) : (
          <Formik
            initialValues={formInitialValues}
            validationSchema={currentValidationSchema}
            onSubmit={_handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form id={formId}>
                {_renderStepContent(activeStep)}

                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={_handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <div className={classes.wrapper}>
                    <Button
                      disabled={isSubmitting}
                      type="submit"
                      variant="contained"
                      color="primary"
                      className={classes.button}
                    >
                      {isLastStep ? 'Save Data' : 'Next'}
                    </Button>
                    {isSubmitting && (
                      <CircularProgress
                        size={24}
                        className={classes.buttonProgress}
                      />
                    )}
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        )}
      </React.Fragment>
    </React.Fragment>

    );
  }