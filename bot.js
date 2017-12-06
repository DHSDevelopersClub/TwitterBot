// Necessary imports
var twit = require('twit');
var config = require('./config.js');

var Twitter = new twit(config);

// Retrieve an user's timeline
var getTL = function(c,d) {
    var params = {
        screen_name: c,
        count: d,
        exclude_replies: 'true'
    }

    Twitter.get('statuses/user_timeline', params, function(err, data) {
        if(!err) {
            console.log(data);
        }
        else {
            console.log('Error occurred at searchtime');
        }
    });
};

// Post a tweet to the account whose access tokens are in config.js
var status = function() {
    var params = {
        status: 'A neat tweet'
    }

    Twitter.post('statuses/update', params);
};

// Retweet the post matching the provided id
var retweet = function() {
    var params = {
        id: ''
    }
    Twitter.post('statuses/retweet/:id', params)
};

// Get two tweets from Sebastian's timeline
var example = function() {
    getTL('Sebastian__Boyd', 2);
}

example();