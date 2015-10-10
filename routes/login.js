var bodyParser = require('body-parser');

module.exports = function(db) {
  var verbs = {
    get: function(req, res) {
      var loggedIn = req.session.loggedIn;
      if (loggedIn) {
        res.redirect("/");
      }
      res.render('pages/login');
    },
    post: function(req, res) {
      req.session.loggedIn = true;
      res.send('OK');
    }
  };
  
  var urlencoded = bodyParser.urlencoded({ extended: false })
  return { route: '/login', middleware: urlencoded, verbs: verbs };
};