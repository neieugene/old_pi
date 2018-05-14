(function() {
  app.storage.ApplicationUtils = (function() {
    function ApplicationUtils() {
      app.utils[this.NAME] = this.init.bind(this);
    }

    return ApplicationUtils;

  })();

}).call(this);
