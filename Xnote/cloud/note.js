//provide endpoints for notes

module.exports = function (){

	var express = require('express');
	var app = express();

  //note query endpoint
  app.get('/note', function(req, res){

    var subject = req.body.subject;

    var note = Parse.Object.extend("Note");
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
  app.get('/purchased_note', function(req, res){

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

  //user uploaded note query endpoints
  app.get('/uploaded_note'), function(req, res){

    var currentUser = Parse.User.current();

    var subject = req.body.subject;
    var relation = currentUser.relation("uploaded_note");
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

  //uploading new note
  app.post('/upload_note', function(req, res){

    var currentUser = Parse.User.current();

    var subject = req.body.subject;
    var title = req.body.til;
    var subtitle = req.body.subtitle;
    var filename = title+".png";

    var file = new Parse.File(filename, { base64: req.body.note});//note
    //create note object
    var Note = Parse.Object.extend("Note");
    var note = new Note();
    note.set('title', title);
    note.set('subtitle', subtitle);
    note.set('subject', subject);
    note.set('content', file);
    var relation = currentUser.relation("uploaded_note");
    relation.add(note);
    //save
    currentUser.save(null, {
        success: function(note) {
          res.send('succeed');
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