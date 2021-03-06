module.exports = function(db) {
  var verbs = {
    get: function(req, res) {
      var loggedIn = req.session.loggedIn;

      if (!loggedIn) {
        res.redirect('/login');
        return;
      }

      res.render('pages/challenges', { loggedIn: loggedIn });
    }
  };

  return { route: '/challenges', verbs: verbs };
};
