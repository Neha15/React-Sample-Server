const Users = require('./UserModel');
module.exports = {
    getUsersDetails: function(req, res) {
        Users.find()
          .then(result => {
            return res.status(200).json(result);
          }).catch(err => {
            throw new Error('Error while getting user details', err);
          })
    },
    createUserDetails: function(req, res) {
       let body = new Users(req.body);
       Users.create(body)
        .then(() => {
            return res.status(201).json({
                data: req.body,
                message: 'Successfully added the user'
            });
        }).catch(err => {
          throw new Error('Error while adding user', err);
        });
    },
    updateUserDetails: function(req, res) {
      let updatedData = req.body;
      let userId = req.params.userId;
      Users.findByIdAndUpdate({
        _id: userId
      }, {
        $set: {
          firstName: updatedData.firstName,
          lastName: updatedData.lastName,
          address: updatedData.address
        }
      }).exec()
       .then((result) => {
           return res.status(200).json({
               data: result,
               message: 'Successfully updated the user'
           });
       }).catch(err => {
         throw new Error('Error while updating user', err);
       });
   },

   getUserByEmail: function(req, res) {
     let email = req.params.email;
     return Users.findOne({
       email: email
     })
     .exec()
     .then((result) => {
       res.json(result);
     }).catch(err => {
       throw new Error('Error while getting user details by email');
     })

   }
}