//provide endpoints for notes

module.exports = function (){

	var express = require('express');
	var app = express();

  //note query endpoint
  app.get('/note', function(req, res){

    var subject = req.body.subject;

    var note = Parse.Object.extend("Notes");
    var query = new Parse.Query(note);
    //if subject is not provided, send all notes back
    if(subject !== null){
      query.equalTo('subject',subject);
    }

    query.find({
      success: function(notes) {
        res.send(notes);
        return;
      },
      error: function(error) {
        res.send(error);
        return;
      }
    });
    
  });

  //user purchased note endpoints
  app.get('/purchased_note'), function(req, res){

    var currentUser = Parse.User.current();

    var subject = req.body.subject;
    var relation = currentUser.relation("purchased_note");
    var note_query = relation.query();
    //if subject is not provided, send all notes back
    if(subject !== null){
      note_query.equalTo('subject',subject);
    }

    note_query.find({
      success: function(notes) {
        res.send(notes);
        return;
      },
      error: function(error) {
        res.send(error);
        return;
      }
    });
    
  });

  return app;

}();