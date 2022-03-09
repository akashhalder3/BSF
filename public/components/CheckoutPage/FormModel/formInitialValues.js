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
    rankhs,
    appointment,
    dojg,
    sbsf,
  }
} = checkoutFormModel;

export default {
  [fullName.name]: '',
  [irla.name]: '',
  [mobile.name]: '',
  [email.name]: '',
  [unit.name]: '',
  [rank.name]: '',
  [parentunit.name]: '',
  [rankhs.name]: '',
  [appointment.name]: '',
  [dojg.name]: '',
  [sbsf.name]: '',
};
