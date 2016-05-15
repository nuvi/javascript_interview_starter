var express = require('express'),
    userStats = require('../lib/user_stats');
    router = express.Router();

router.get('/', function (req, res) {
    res.render('index', {
        profile : {
            title: 'Hire me!',
            name: 'Sam Keller',
            linkedin: 'https://www.linkedin.com/in/samuela-keller-681b8621',
            email: 'skellertor@gmail.com',
            phone: '801-494-3573'
        }
    });
});

router.post('/tweets', function (req, res) {
    userStats.getStats(function(stats){
        res.json(stats);
    });
});

module.exports = router;