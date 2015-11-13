//provide endpoints for user signin and signup

module.exports = function (){
	var express = require('express');
	var app = express();

	// Signs up a new user
  app.post('/signup_submit/', function(req, res) {
  	//username & password in section one
    var username = req.body.email;
    var password = req.body.password;
    //basic perosnal info in section two
    var first_name = req.body.first_name;
    var last_name = req.body.last_name;
    //profile image
    //var profile_pic = req.body.profile_pic;

    var user = new Parse.User();
    user.set('username', username);
    user.set('password', password);
    user.set('email', username); //username = email
    user.set('first_name',first_name);
    user.set('last_name', last_name);
    //user.set('profile',profile_pic);
    
    user.signUp().then(function(user) {
      console.log('a user just signed up')
      res.redirect('/');
      return;
    }, function(error) {
      // Show the error message and let the user try again
      console.log('failed sign up a user with error',error)
      res.send(error.message);
      return;
    });
  });

  // Logs in the user endpoint
  app.post('/log_in/', function(req, res) {
    
      var username = req.body.email;
      var password = req.body.password;

      Parse.User.logIn(username, password, {
        success: function(user) {
          res.send(user);
          return;
        },
        error: function(user, error) {
          res.send(error.message);
          return;
        }

      });
 
  });

    // Logs out the user
  app.post('/logout', function(req, res) {
    Parse.User.logOut();
    res.redirect('/');
  });

  return app;


}();