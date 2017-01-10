var AuthPlugin = {
  // Used to store the token in the users browser
  setToken: function (token, expiration) {
    localStorage.setItem('authToken', token);
    localStorage.setItem('authTokenExpiration', expiration);
  },
  // Used to remove the token from the users browser
  destroyToken: function () {
    localStorage.removeItem('authToken');
    localStorage.removeItem('authTokenExpiration');
  },
  // Used to retrieve the token from the users browser
  getToken: function () {
    var token = localStorage.getItem('authToken');
    var expiration = localStorage.getItem('authTokenExpiration');

    // Handle cases where token is invalid or missing
    if (!token || !expiration) {
      return null;
    }

    if (Date.now() > parseInt(expiration)) {
      this.destroyToken(); // token is expired, destroy it
      return null;
    } else {
      return token;
    }
  },
  // Helper method, returns true or false 
  loggedIn: function () {
    if (this.getToken()) {
      return true;
    } else {
      return false;
    }
  }
};

export default function(Vue){
	Vue.auth = AuthPlugin; 
	
	// assign the plugin to the Vue object
	Object.defineProperties(Vue.prototype, {
		$auth: {
			get: function(){
				return Vue.auth;
			}
		}
	})
}
