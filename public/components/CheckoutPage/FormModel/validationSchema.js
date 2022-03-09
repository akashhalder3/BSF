import * as Yup from 'yup';
import moment from 'moment';
import checkoutFormModel from './checkoutFormModel';
const {
  formField: {
    fullName,
    irla,
    mobile,
    email,
    unit,
    rank,
    parentunit,
    
  }
} = checkoutFormModel;


export default [
  Yup.object().shape({
    [fullName.name]: Yup.string().required(`${fullName.requiredErrorMsg}`),
    
    
    [irla.name]: Yup.string()
      .required(`${irla.requiredErrorMsg}`)
      .test(
        'len',
        `${irla.invalidErrorMsg}`,
        val => val && val.length === 10
      ),
    
      [mobile.name]: Yup.string()
      .required(`${mobile.requiredErrorMsg}`)
      .test(
        'len',
        `${mobile.invalidErrorMsg}`,
        val => val && val.length === 10
      ),
    
      [unit.name]: Yup.string().required(`${unit.requiredErrorMsg}`),
      [rank.name]: Yup.string().required(`${rank.requiredErrorMsg}`),
      [parentunit.name]: Yup.string().required(`${parentunit.requiredErrorMsg}`),
    
  }),

  Yup.object().shape({
    [email.name]: Yup.string().required(`${email.requiredErrorMsg}`),
    
    
  })
];
