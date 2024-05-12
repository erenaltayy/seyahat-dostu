module.exports = {
  friendlyName: 'Ride',

  description: '',

  inputs: {},

  exits: {
    success: {
      responseType: 'inertia'
    }
  },

  fn: async function () {
    return {
      page: 'ride',
      props: {
        //name: 'Inertia'
      }
    }
  }
}



