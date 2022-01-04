window.PDC = { Locale: { getLocale() { return ['fr-fr'] } } };

      window.psnWebToolbar = {};
      window.psnWebToolbar.getGuestLocale = function (isLocaleSupported, done) {
        if (isLocaleSupported('fr-fr')) {
          return done('fr-fr');
        }
        return done();
      };
      window.psnWebToolbar.authLogoutRedirectUri = 'https://www.playstation.com';

      window.sharedNav = {};
      window.sharedNav.opts = {
        ...window.sharedNav.opts,
        webToolbarType: 'oracle'
      };