var fs = require('fs');

var userStats = {

    getStats: function(callback){
        fs.readFile('tweets.json', 'utf8', function (err, data) {
            var tweets = JSON.parse(data);
            var status = tweets.statuses;
            var count = 0,
                users = {};
            for(var i = 0; i < status.length; i++){
                users[count.toString()] = {
                    screen_name: '@' + status[i].user.screen_name,
                    status: status[i].text,
                    followers: status[i].user.followers_count,
                    friends: status[i].user.friends_count,
                    id: count
                };
                count++;
            }
            users['count'] = count;
            callback(users);
        });
    }
};

module.exports = userStats;