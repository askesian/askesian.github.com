(function(window, document, undefined) {

  var cookiejar = {

    getCookie: function(name) {

      var nameEQ = name + "=";
      var ca = document.cookie.split(';');

      for(var i = 0, len = ca.length; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0)==' ') {
            c = c.substring(1, c.length);
          }

          if (c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length, c.length);
          }
      }

      return null;
    },

    addCookie: function(name, value, days) {

      var expires;

      if (days) {
          var date = new Date();

          date.setTime(date.getTime() + (days*24*60*60*1000));
          expires = "; expires=" + date.toGMTString();
      }
      else {
        expires = "";
      }

      document.cookie = name + "=" + value + expires + "; path=/";
    },

    destroyCookie: function(name) {
      this.addCookie(name, "", -1);
    }

  };

  window.COOKIEJAR = cookiejar;

}(window, document));