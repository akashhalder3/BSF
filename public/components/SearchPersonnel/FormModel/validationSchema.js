import * as Yup from 'yup';
import moment from 'moment';
import checkoutFormModel from './checkoutFormModel';
const {
  formField: {
    
    irla,
    
  }
} = checkoutFormModel;


export default [
  Yup.object().shape({
    
    
    [irla.name]: Yup.string()
      .required(`${irla.requiredErrorMsg}`)
      .test(
        'len',
        `${irla.invalidErrorMsg}`,
        val => val && val.length === 10
      ),
    
      
    
  }),

  
];
