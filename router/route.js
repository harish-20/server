const express = require( 'express' );
const router = express.Router();
const {createUser,  readUser, updateUser, deleteUser} = require( '../controller/user.js' )

router.post('/newuser',createUser);

router.get('/alluser',readUser);

router.patch('/edituser/:id',updateUser);

router.delete('/deleteuser/:id',deleteUser);

module.exports = router;