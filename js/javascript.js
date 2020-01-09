if(!localStorage.getItem('user')) {
  window.localStorage.setItem('user','username');
}
if(!localStorage.getItem('pass')) {
  window.localStorage.setItem('pass','password');
}

window.addEventListener('load',function() {
  //Check if user and pass have been set. If not,
  //Bring up 'Sign up' page first.

  //Once signed up, save info in localStorage
  //Then run the 'successful' stuff.

  //When user comes back to site, automatically give them
  //the login stuff because we will detect the user and password
  //info from signing up.

  var user = localStorage.getItem('user');
  var pass = localStorage.getItem('pass');
  if (user === 'username') {
    console.log("Need to set a username");
  }
  else {
    console.log("Found username in storage");
  }
});

function validate_info() {

}
