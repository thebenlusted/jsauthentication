if(!localStorage.getItem('user')) {
  window.localStorage.setItem('user','username');
}
if(!localStorage.getItem('pass')) {
  window.localStorage.setItem('pass','password');
}

window.addEventListener('load',function() {
  //Check if user and pass have been set. If not,
  //Bring up 'Sign up' page first.

  if(localStorage.getItem('user') === 'username' && localStorage.getItem('pass') === 'password')
  {
    document.getElementById('signCont').style.display = 'block';
  }
  else {
    document.getElementById('logCont').style.display = 'block';
  }

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

  if(pass === 'password') {
    console.log("Need to set a password");
  } else {
    console.log("Found password in storage");
  }
});

function validate_info() {
  var this_user = localStorage.getItem('user');
  console.log(this_user);
}

function signup() {
  var new_user;
  var new_pass;
  if(document.getElementById("i-user").value != "") {
    new_user = document.getElementById("i-user").value;
    window.localStorage.setItem('user',new_user);
    console.log(new_user);
  } else {
    console.log("No username recorded");
  }
  if(document.getElementById("i-pass").value != "") {
    new_pass = document.getElementById("i-pass").value;
    window.localStorage.setItem('pass',new_pass);
    console.log(new_pass);
  } else {
    console.log("No password recorded");
  }

  //Password should be 8+ characters long
  //Check if password contains an uppercase letter and special character ($,!,%)
  //Username can be whatever
}

function clearDate() {
  
}
