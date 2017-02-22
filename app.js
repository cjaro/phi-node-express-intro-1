var express = require('express');  //with no dots or slashes it goes straight to the node_modules folder
var app = express();
var bodyParser = require('body-parser');  //DO NOT KNOW body parser

app.use(express.static('public'));  //are you a public folder?

app.use(bodyParser.urlencoded({extended: true}));

var songList = [
  {
    title: 'We did not start the Phire',
    artist: 'Billy Joel'
  },
  {
    title: 'Ring of Phire',
    artist: 'Johnny Cash'
  }
];

app.get('/songs', function(req, res) {   // here  /songs refers to a route
  res.send(songList);
});

app.post('/newSong', function(req, res){ // here /newSong is the new url to find this stuff
  var newSong = req.body;
  if(newSong.artist !== "Justin Bieber"){
    songList.push(newSong); //if artist is not JB, proceed normally
    console.log(songList);  //throw that shit on the new song thing
    res.sendStatus(200); //success!
  } else {
    res.sendStatus(500); //otherwise, you're a failure to everyone in your life
  }
});

app.listen(3000); //listen for this port
