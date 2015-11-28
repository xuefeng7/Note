
var parseExpressCookieSession = require('parse-express-cookie-session');
var parseExpressHttpsRedirect = require('parse-express-https-redirect');

// These two lines are required to initialize Express in Cloud Code.
express = require('express');
app = express();

// Global app configuration section
app.set('views', 'cloud/views');  // Specify the folder to find templates
app.set('view engine', 'ejs');    // Set the template engine
app.use(express.bodyParser());    // Middleware for reading request body
app.use(parseExpressHttpsRedirect()); // Automatically redirect non-secure urls to secure ones
app.use(express.cookieParser('SqhJL7a5UPYhdNaRChWTGspWuapBjqYOlqX99wGy'));
app.use(parseExpressCookieSession({ cookie: { maxAge: 360000000 } }));

// This is an example of hooking up a request handler with a specific request
// path and HTTP verb using the Express routing API.
app.get('/user?', function(req, res){

	var currentUser = Parse.User.current();

	if (currentUser) {

			//we have user's session token and objectId
			Parse.User.become(currentUser.sessionToken).then(function (user) {
	  			// The current user is now set to user.
	  			//response with all user info
	  			res.send(user);
			}, function (error) {
	  			// The token could not be validated.
	  			console.log('session token invalid');
	  			res.send('failed');
			});

	} else {
		
	    res.send('failed');
	}
});

//User endpoints
app.use('/', require('cloud/user'));
//Note endpoints
app.use('/', require('cloud/note'));
// Attach the Express app to Cloud Code.
app.listen();
