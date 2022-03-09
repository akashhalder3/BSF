export default {
  formId: 'checkoutForm',
  formField: {
    fullName: {
      name: 'fullName',
      label: 'Name*',
      requiredErrorMsg: 'Name is required'
    },
    
    irla: {
      name: 'irla',
      label: 'IRLA/REGEMENT NUMBER*',
      requiredErrorMsg: 'IRLA/REGEMENT NUMBER',
      invalidErrorMsg: 'IRLA/REGEMENT NUMBER (e.g. 1234568520)'
    },

    mobile: {
      name: 'mobile',
      label: 'Mobile Number*',
      requiredErrorMsg: 'Mobile is required'
    },
    
    email: {
      name: 'email',
      label: 'Email*',
      requiredErrorMsg: 'Email is required'
    },
    unit: {
      name: 'unit',
      label: 'Unit',
      requiredErrorMsg: 'Unit is required'
    },
    rank: {
      name: 'rank',
      label: 'Rank',
      requiredErrorMsg: 'Rank is required'
    },
    parentunit: {
      name: 'parentunit',
      label: 'Parent Unit',
      requiredErrorMsg: 'Parent Unit is required'
    },
    rankhs: {
      name: 'rankhs',
      label: 'Rank Held Since',
      requiredErrorMsg: 'Rank Held Since is required'
    },
    appointment: {
      name: 'appointment',
      label: 'Appointment',
      requiredErrorMsg: 'Appointment is required'
    },
    dojg: {
      name: 'dojg',
      label: 'Date of Join in BSF',
      requiredErrorMsg: 'Date of Join in BSF is required'
    },
    sbsf: {
      name: 'sbsf',
      label: 'Status in BSF',
      requiredErrorMsg: 'Status in BSF is required'
    },
  }
};
