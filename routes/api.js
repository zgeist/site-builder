var express = require('express');
var router = express.Router();
var User = require('../server/models/User');

router.post('/signup', function(req, res, next){

    console.log(req.query);

  var newUser = new User(req.query);

  newUser.save(function(err){
    if(err) throw err;

    User.findOne({
      username: req.query.username
    }, function (err, user) {
      if(err) throw err;

      // test a matching password
      user.comparePassword(req.query.password, function(err, isMatch) {
        if (err) throw err;
        console.log(req.query.password, isMatch); // -> req.query.password: true
      });

      // test a failing password
      user.comparePassword(req.query.password, function(err, isMatch) {
        if (err) throw err;
        console.log(req.query.password, isMatch); // -> req.query.password: false
      });
    })
  });

  res.send({
    singup: true
  })

});

module.exports = router;