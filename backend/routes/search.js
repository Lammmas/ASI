var express = require('express');
var router = express.Router();

require('es6-promise').polyfill();
require('isomorphic-fetch');

/* GET search listing. */
router.get('/', function(req, res, next) {
  res.send(JSON.stringify({'usage': '/search/GithubUsername'}));
});

router.get('/:name', function(req, res, next) {
    var username = req.params.name;
    var result = [];
    // Because who needs whitespaces
    username = username.replace(/\s+/g, '');

    const config = {
        method: 'GET',
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
        mode: 'cors',
        cache: 'default',
    };

    // I copied this over from the task repo because it's such a straightforward thing, and it saved me typing :)
    fetch(`https://api.github.com/users/${username}/repos?order=desc&sort=size`).then((response) => {
      response.json().then(body => {
        if (response.status === 200) {
          res.status = 200;
          res.json(body.slice(0, 5));
        } else if (response.status === 404) {
          res.status = 400;
          res.json({ error: 'User could not be found' });
        } else {
          res.status = 500;
          res.json({ error: 'Whoops! An error occured' });
        }

        res.end();
      });
    });
});

module.exports = router;
